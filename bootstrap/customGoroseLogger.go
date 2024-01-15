package bootstrap

import (
	"fmt"
	"github.com/gohouse/gorose/v2"
	"go.uber.org/zap"
	"time"
)

// Logger ...
type Logger struct {
	z *zap.Logger
}

var _ gorose.ILogger = (*Logger)(nil)

var logger *Logger

// NewLogger ...
func NewLogger(zapLog *zap.Logger) *Logger {
	return &Logger{z: zapLog}
}

// EnableSqlLog ...
func (l *Logger) EnableSqlLog() bool {
	return true
}

// EnableErrorLog ...
func (l *Logger) EnableErrorLog() bool {
	return true
}

// EnableSlowLog ...
func (l *Logger) EnableSlowLog() float64 {
	return 1
}

// Slow ...
func (l *Logger) Slow(sqlStr string, runtime time.Duration) {
	if l.EnableSlowLog() > 0 && runtime.Seconds() > l.EnableSlowLog() {
		logger.write(gorose.LOG_SLOW, sqlStr, runtime.String())
	}
}

// Sql ...
func (l *Logger) Sql(sqlStr string, runtime time.Duration) {
	if l.EnableSqlLog() {
		logger.write(gorose.LOG_SQL, sqlStr, runtime.String())
	}
}

// Error ...
func (l *Logger) Error(msg string) {
	if l.EnableErrorLog() {
		logger.write(gorose.LOG_ERROR, msg, "0")
	}
}

func (l *Logger) write(logLevel gorose.LogLevel, msg string, runtime string) {
	content := fmt.Sprintf("[gorose-%v] %v --- %v\n", logLevel.String(), runtime, msg)
	zapLog := l.z.WithOptions(zap.AddCallerSkip(1))
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
