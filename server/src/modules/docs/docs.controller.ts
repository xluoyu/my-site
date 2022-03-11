import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';

@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}
  @Get()
  async find() {
    const fileList = ['test.md'];
    return await this.docsService.loadDocs(fileList);
  }
}
