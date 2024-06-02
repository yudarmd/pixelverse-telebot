import fetch from "node-fetch";
import delay from "delay";
import fs from "fs";
import { Twisters } from "twisters";

const pets = (secret, tgId, username, initData) =>
  new Promise((resolve, reject) => {
    fetch("https://api-clicker.pixelverse.xyz/api/pets", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "id,en;q=0.9,id-ID;q=0.8,en-US;q=0.7",
        Origin: "https://sexyzbot.pxlvrs.io",
        Referer: "https://sexyzbot.pxlvrs.io/",
        "Sec-Ch-Ua":
          '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        Secret: secret,
        "Tg-Id": tgId,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Username: username,
        Initdata: initData,
      },
      body: null,
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const selectBot = (secret, tgId, username, initData, petId) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://api-clicker.pixelverse.xyz/api/pets/user-pets/${petId}/select`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "sec-ch-ua":
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          Referer: "https://sexyzbot.pxlvrs.io/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Content-Length": "0",
          initdata: initData,
          Origin: "https://sexyzbot.pxlvrs.io",
          Priority: "u=1, i",
          "Tg-Id": tgId,
          Secret: secret,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
          Username: username,
        },
        method: "POST",
        body: null,
      }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const claim = (secret, tgId, username, initData) =>
  new Promise((resolve, reject) => {
    fetch("https://api-clicker.pixelverse.xyz/api/mining/claim", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua":
          '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        Referer: "https://sexyzbot.pxlvrs.io/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-Length": "0",
        initdata: initData,
        Origin: "https://sexyzbot.pxlvrs.io",
        Priority: "u=1, i",
        "Tg-Id": tgId,
        Secret: secret,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
        Username: username,
      },
      method: "POST",
      body: null,
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

(async () => {
  try {
    const secret =
      "3b675583e01cef1908c7cb8b4883e423add34551366a6d802c019b0a9b7e21b6";
    const tgId = "580609325";
    const username = "yudarmd";
    const initData =
      "query_id=AAEtZZsiAAAAAC1lmyJ9cnQa&user=%7B%22id%22%3A580609325%2C%22first_name%22%3A%22Yuda%22%2C%22last_name%22%3A%22Rmd%22%2C%22username%22%3A%22yudarmd%22%2C%22language_code%22%3A%22id%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1716927923&hash=f89244f65eac288bac1d6d24bda84e3ebc5a1e770930dd24a7e6cfd09db47225";
    const twisters = new Twisters();

    while (true) {
      const claimFi = await claim(secret, tgId, username, initData);
      twisters.put(username, {
        text: `Claim Fi : ${claimFi.claimedAmount}`,
      });
      await delay(1 * 60 * 60 * 1000);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
