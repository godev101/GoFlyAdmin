package model

import (
	"fmt"
	"go.uber.org/zap"
	"gofly/global"
	"gofly/pkg/diy"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gohouse/gorose/v2" //数据库操作
)

var err error
var engin *gorose.Engin

// 取得数据库连接实例
func MyInit(starType interface{}) {
	global.App.Log.Info(fmt.Sprintf("连接数据库中:%v", starType))
	global.App.Config.InitializeConfig()
	dsbSource := fmt.Sprintf("%v:%v@tcp(%v:%v)/%v?charset=utf8mb4&parseTime=True&loc=Local&timeout=1000ms", global.App.Config.DBconf.Username, global.App.Config.DBconf.Password, global.App.Config.DBconf.Hostname, global.App.Config.DBconf.Hostport, global.App.Config.DBconf.Database)
	engin, err = gorose.Open(&gorose.Config{Driver: global.App.Config.DBconf.Driver, Dsn: dsbSource, Prefix: global.App.Config.DBconf.Prefix})

	// 持久化sql中间件
	//engin.Use(gorose.DefaultLogger())

	//tiemstr := time.Now().Format(global.App.Config.Log.Filename)
	//engin.Use(func(e *gorose.Engin) {
	//	e.SetLogger(gorose.NewLogger(
	//
	//		&gorose.LogOption{
	//			FilePath:       global.App.Config.Log.RootDir + "/" + tiemstr,
	//			EnableSqlLog:   true,
	//			EnableSlowLog:  1,
	//			EnableErrorLog: true,
	//		}),
	//	)
	//})

	goroseLog := diy.NewGoroseZapLogger(
		global.App.Log.WithOptions(zap.AddCallerSkip(6)),
	)
	engin.Use(func(e *gorose.Engin) {
		e.SetLogger(goroseLog)
	})

	// 将zap日志记录器与gorose集成

	if err != nil {
		global.App.Log.Info(fmt.Sprintf("数据库连接实例错误: %v", err))
	} else {
		global.App.Log.Info(fmt.Sprintf("连接数据库成功:%v", starType))
		engin.GetExecuteDB().SetMaxIdleConns(10)                  //连接池最大空闲连接数,不设置, 默认无
		engin.GetExecuteDB().SetMaxOpenConns(50)                  // 连接池最大连接数,不设置, 默认无限
		engin.GetExecuteDB().SetConnMaxLifetime(59 * time.Second) //时间比超时时间短
		engin.GetQueryDB().Exec("SET @@sql_mode='NO_ENGINE_SUBSTITUTION';")
	}
}

// DB controller层调用
func DB() gorose.IOrm {
	return engin.NewOrm()
}

// CreateDataBase 新建数据库
func CreateDataBase(Username, Password, Hostname, Hostport, Database interface{}) {
	global.App.Config.InitializeConfig()
	dsbSource := fmt.Sprintf("%v:%v@tcp(%v:%v)/%v?charset=utf8mb4&parseTime=True&loc=Local&timeout=1000ms", Username, Password, Hostname, Hostport, "")
	engin, err = gorose.Open(&gorose.Config{Driver: global.App.Config.DBconf.Driver, Dsn: dsbSource})
	if err != nil {
		global.App.Log.Info(fmt.Sprintf("创建时，数据库连接实例错误: %v", err))
	} else {
		engin.GetQueryDB().Exec(fmt.Sprintf("CREATE DATABASE IF NOT EXISTS %v DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci", Database))
	}
}

// ExecSql 导入数据库文件
func ExecSql(rows string) {
	Result, err := engin.GetExecuteDB().Exec(rows)
	if err != nil {
		global.App.Log.Info(fmt.Sprintf("导入数据失败:%v。%v", err, Result))
	}
}

// GetTotal 取得总行数
func GetTotal(tablename string, wheres map[string]interface{}) int64 {
	total, _ := DB().Table(tablename).Where(wheres).Count()
	return total
}
