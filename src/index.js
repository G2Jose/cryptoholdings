import fs from 'fs';
import os from 'os';
import path from 'path';
import { getFormattedTotalValue } from './api';

let holdings;
try {
  holdings = JSON.parse(
    fs.readFileSync(path.join(os.homedir(), '.holdings.json'), 'utf8')
  );
} catch (e) {
  throw new Error(
    `No 'holdings.json' file provided.
	Please make sure you have a valid 'holdings.json' file in your $HOME directory`
  );
}

getFormattedTotalValue(holdings).then(console.log);
