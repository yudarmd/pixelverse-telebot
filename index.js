const axios = require('axios');

const config = {
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'id,en;q=0.9,id-ID;q=0.8,en-US;q=0.7',
    'Origin': 'https://sexyzbot.pxlvrs.io',
    'Referer': 'https://sexyzbot.pxlvrs.io/',
    'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'Secret': '3b675583e01cef1908c7cb8b4883e423add34551366a6d802c019b0a9b7e21b6',
    'Tg-Id': '580609325',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'Username': 'yudarmd',
    'Initdata': 'query_id=AAEtZZsiAAAAAC1lmyKInL8h&user=%7B%22id%22%3A580609325%2C%22first_name%22%3A%22Yuda%22%2C%22last_name%22%3A%22Rmd%22%2C%22username%22%3A%22yudarmd%22%2C%22language_code%22%3A%22id%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1716922973&hash=f7fcb741e06a8a889778b269e9ab3f7065e8f87aa79d3e42d3aa82584c3bf13a'
  }
};

axios.get('https://api-clicker.pixelverse.xyz/api/pets', config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
