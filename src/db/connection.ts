import * as sql from 'mssql';

class Test {
  pruebaConexion = async () => {
    const server = process.env.DB_SERVER;
    const user = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    if (typeof server === 'undefined' || typeof user === 'undefined' || typeof password === 'undefined') {
      const env = `server: ${server ?? ''}; user: ${user ?? ''}; password: ${password ?? ''};`;
      throw Error(`There are environment variables not defined (${env})`);
    }
    let connection = new sql.ConnectionPool({
      server,
      user,
      password,
      database: 'Prueba',
      options: {
        instanceName: 'SQLEXPRESS',
        useUTC: true,
      },
    }, (error: sql.ConnectionError) => {
      console.log(error);
    });

    connection = await connection.connect();
    const result = await connection.query('select * from Personas');
    console.log(result);
    await connection.close();
  };

}

export const prueba = new Test();