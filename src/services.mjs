import cheerio from "cheerio";
import axios from "axios";

export const isCommand = msg => {
  return /\/start|\/help/.test(msg);
};

export const getData = async artists => {
  if (!artists || artists.length !== 2)
    return { error: "Please, include artist names in the right way \n/help" };

  try {
    const { status, data } = await axios.get(
      `https://www.whosampled.com/six-degrees/search/?artist1=${artists[0]}&artist2=${artists[1]}`
    );
    if (status > 199 && status < 300) {
      const result = [];
      const $ = cheerio.load(data);

      $(".connectionNodeDescription").each(function() {
        result.push(
          $(this)
            .text()
            .replace(/\t|\n|\r/g, " ")
            .trim()
        );
      });

      const title = $(".six-degrees-bubble").text();

      return { title, data: result };
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};