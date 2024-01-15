package model

import (
	"fmt"
	"github.com/gohouse/gorose/v2"
	"go.uber.org/zap"
	"sync"
	"time"
)

// Logger ...
type zapLogger struct {
	z *zap.Logger
}

var _ gorose.ILogger = (*zapLogger)(nil)

var logger *zapLogger

var logOnce sync.Once

// NewLogger ...
func NewLogger(zapLog *zap.Logger) *zapLogger {
	logOnce.Do(func() {
		logger = &zapLogger{z: zapLog}
	})
	return logger

}

// EnableSqlLog ...
func (l *zapLogger) EnableSqlLog() bool {
	return true
}

// EnableErrorLog ...
func (l *zapLogger) EnableErrorLog() bool {
	return true
}

// EnableSlowLog ...
func (l *zapLogger) EnableSlowLog() float64 {
	return 1
}

// Slow ...
func (l *zapLogger) Slow(sqlStr string, runtime time.Duration) {
	if l.EnableSlowLog() > 0 && runtime.Seconds() > l.EnableSlowLog() {
		logger.write(gorose.LOG_SLOW, sqlStr, runtime.String())
	}
}

// Sql ...
func (l *zapLogger) Sql(sqlStr string, runtime time.Duration) {
	if l.EnableSqlLog() {
		logger.write(gorose.LOG_SQL, sqlStr, runtime.String())
	}
}

// Error ...
func (l *zapLogger) Error(msg string) {
	if l.EnableErrorLog() {
		logger.write(gorose.LOG_ERROR, msg, "0")
	}
}

func (l *zapLogger) write(logLevel gorose.LogLevel, msg string, runtime string) {
	content := fmt.Sprintf("[gorose-%v] %v --- %v\n", logLevel.String(), runtime, msg)
	//fmt.Println(content)
	// l.z.Info(content)
	//zapLog := l.z.WithOptions(zap.AddCallerSkip(5))
	zapLog := l.z
	switch logLevel {
	case gorose.LOG_SQL:
		zapLog.Info(content)
		break
	case gorose.LOG_SLOW:
		zapLog.Warn(content)
		break
	case gorose.LOG_ERROR:
		zapLog.Error(content)
		break
	default:
		zapLog.Info(content)
		break
	}
}
