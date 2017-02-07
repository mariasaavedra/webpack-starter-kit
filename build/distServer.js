import chalk from 'chalk'
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.prod';

/* eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log(chalk.green('Building application...'));

webpack(config).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(chalk.red(err));
    return 1;
  } else {
    console.log(chalk.green('Build completed successfully!'));

    const port = 3000;
    const app = express();

    app.use(express.static('dist'));

    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    app.listen(port, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(chalk.white("listening on port " + port + "..."));
        open('http://localhost:' + port);
      }
    });

  }
});
  
