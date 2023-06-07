import { Request, Response } from 'express';
import distanceMatrix from '../utils/map.util';
import _calculateFare from '../utils/fare-calculator.util';

const getTravelTime = async (request: Request, res: Response) => {
    try {
        const { origin, destination } = request.body;
        const json = (await distanceMatrix(origin, destination)) as any;
        let distance_in_m: number = 0;
        let time_in_secs: string = '';
        let time_in_text: string = '';
        if (
            json.rows &&
            json.rows.length > 0 &&
            json.rows[0].elements.length > 0 &&
            json.rows[0].elements[0] &&
            json.rows[0].elements[0].distance
        ) {
            (distance_in_m = json.rows[0].elements[0].distance.value),
                (time_in_secs = json.rows[0].elements[0].duration.value),
                (time_in_text = json.rows[0].elements[0].duration.text);
        }
        const _data = {
            distance_in_m,
            time_in_secs,
            time_in_text,
        };
        return res.json({
            success: true,
            message: "success",
            data: _data,
        });
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
};

const getFare = async (request: Request, res: Response) => {
    try {
        const { distance } = request.body;
        const mileRate: number = 1.50;
        const fare = _calculateFare(distance, mileRate);
        return res.json({
            success: true,
            message: 'success',
            data: fare
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

export default {
    getTravelTime,
    getFare
}