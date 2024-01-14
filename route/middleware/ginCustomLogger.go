package middleware

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"time"
)

func CustomLogger(logger *zap.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		//path := c.Request.URL.Path
		//query := c.Request.URL.RawQuery
		c.Next() // 执行后续中间件

		// Since returns the time elapsed since t.
		// It is shorthand for time.Now().Sub(t).
		cost := time.Since(start)
		//logger.Info("",
		//	zap.Int("status", c.Writer.Status()),
		//	zap.String("method", c.Request.Method),
		//	zap.String("path", path),
		//	zap.String("query", query),
		//	zap.String("ip", c.ClientIP()),
		//	zap.String("user-agent", c.Request.UserAgent()),
		//	zap.String("errors", c.Errors.ByType(gin.ErrorTypePrivate).String()),
		//	zap.Duration("cost", cost), // 运行时间
		//)
		f64 := float64(cost.Nanoseconds()) / 1000 / 1000
		logger.Sugar().Infof("%d %s %s %s %s %s",
			c.Writer.Status(),
			//strconv.FormatFloat(f64, 'f', 1, 64)+"ms", // 运行时间
			fmt.Sprintf("%.5f", f64)+"ms", // 运行时间
			c.ClientIP(),
			c.Request.Method,
			c.Errors.ByType(gin.ErrorTypePrivate).String(),
			c.Request.URL.String(),
		)
	}
}
