import * as request from 'request';
import * as dotenv from 'dotenv';

interface MapConfigProps {
  GOOGLE_MAP_KEY: string
}

const {
  GOOGLE_MAP_KEY
}: MapConfigProps | any = dotenv.config().parsed;

const getTravelTime = (origin: string, destination: string) => new Promise((resolve, reject) => {
    try {
      const url: string = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${GOOGLE_MAP_KEY}`;

      const headers = {
        "Content-type": "Application/json",
      };

      request.get({ url, headers }, (err, res, body) => {
        try {
          if (err) throw Error(err);
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });

export default getTravelTime;
