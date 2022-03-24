import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo/todo.module';
import { DocsModule } from './modules/docs/docs.module';
import { TagModule } from './modules/tag/tag.module';
import { MusicModule } from './modules/music/music.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    TodoModule,
    DocsModule,
    TagModule,
    MusicModule,
  ],
})
export class AppModule {}
