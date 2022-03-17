import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { NoteRoot } from '../../appConfig';
import { marked } from 'marked';
import { load } from 'js-yaml';

/**
 * 提取文档中的front-matter
 * 并在文档中删除front-matter
 * @param file
 */
const extractOptions = (file: string) => {
  const re = /---(.*?)---/gs;
  return {
    file: file.replace(re, ''),
    options: load(re.exec(file)[1]),
  };
};

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
    const file = await readFileSync(join(NoteRoot, paths[0]), 'utf8');
    return extractOptions(file);
  }

  // getDiffFileList() {}
}
