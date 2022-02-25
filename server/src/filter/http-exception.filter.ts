import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 请求上下文
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    let message = '';
    const exceptionRes = exception.getResponse() as any;

    if (typeof exceptionRes === 'object') {
      message = Array.isArray(exceptionRes.message)
        ? exceptionRes.message.join('\n')
        : exceptionRes.message;
    } else {
      message = exceptionRes;
    }

    const errorResponse = {
      data: {},
      messgae: message || '未知错误',
      code: -1,
    };

    res.status(status);
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.send(errorResponse);
  }
}
