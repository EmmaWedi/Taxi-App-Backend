import { Request, Response } from 'express';
import { uploader } from '../../module/uploader/file.uploader';
import { Uid } from '../../module/formatter.module';

const addVehicle = async (req: Request | any, res: Response) => {
    try {
        const {
            brand,
            model,
            modelYear,
            color,
            modelType,
            licenseNumber,
            condition,
            numOfSeats
        } = req.body;
        const auth = req.user;

        const driver = await req.dbDrivers.findOne({ where: { uid: auth.uid, isApproved: false } });

        if (driver === null) throw Error(`Driver Not Valid`);

        const vid = await Uid();
        
        const vehicle = await req.dbVehicle.create({
            brand,
            model,
            modelType,
            modelYear,
            color,
            licenseNumber,
            condition,
            numOfSeats,
            driver: driver['id'],
            vid
        })
        return res.json({
            success: true,
            message: 'success',
            data: vehicle
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const addImage = async (req: Request | any, res: Response) => {
    try {
        const { image, vid } = req.body;

        const auth = req.user;

        if (typeof image !== 'string') throw Error('Invalid File Format');

        const vehicle = await req.dbVehicle.findOne({ where: { vid, driver: auth.uid } });

        if (vehicle === null) throw Error('Invalid Vehicle Id');

        const _path = await uploader({ image, id: vid });

        await vehicle.update({ image: _path }, { where: { driver: auth.uid, id: vehicle.id } });

        return res.json({
            success: true,
            message: 'Successfully updated vehicle',
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const getAll = async (req: Request | any, res: Response) => {
    try {
        const results = await req.dbVehicle.findAll();
        return res.json({
            success: true,
            message: 'success',
            data: results
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const getDriverVehicle = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;

        const vehicle = await req.dbVehicle.findOne({ where: { driver: auth.uid } });

        if (vehicle === null) throw Error('No Vehicle');

        return res.json({
            success: true,
            message: 'success',
            data: vehicle
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

export default {
    addVehicle,
    addImage,
    getAll,
    getDriverVehicle
}