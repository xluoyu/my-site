import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { NoteRoot } from '../../appConfig';

@Injectable()
export class DocsService {
  /**
   * 获取列表内的md文件
   * @param paths
   * @returns
   */
  async loadDocs(paths: string[]) {
    const files = await Promise.all(
      paths.map(async (path) => {
        const file = await readFileSync(join(NoteRoot, path), 'utf8');
        return file;
      }),
    );

    return {
      files,
    };
  }

  // getDiffFileList() {}
}
