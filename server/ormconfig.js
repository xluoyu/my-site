module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xluoyu',
  database: 'main',
  entities: [`dist/modules/**/entities/*.entity{.js, .ts}`],
  dropSchema: false, // 建立连接时产删除表结构
  synchronize: true, // 同步数据库。 请注意此选项，不要在生产环境中使用它，否则将丢失所有生产数据
  logging: false,
};
