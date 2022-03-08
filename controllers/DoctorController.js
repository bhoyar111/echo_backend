import sCode from "../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
    // getIdAssignedMsg
} from '../custom/error-msg';

// import { getDecryptId, pageLimit } from '../custom/secure';

// models import here
import model from '../db/models';
const { ChgDoctor } = model;

// validation import here
import validateDoctor from '../requests/doctorRequest';

export default {
    async getDoctors(req, res) {
        try {
            let doctors = [];
            doctors = await ChgDoctor.getList();
            res.status(ok).send({ doctors });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async addDoctor(req, res) {
        try {
            const { error } = validateDoctor(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });
            const doctor = await ChgDoctor.saveRecord(req.body);
            if (!doctor) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(created).send({ doctor});
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async getDoctor(req, res) {
        try {
            const { id } = req.params;
            // const decId = getDecryptId(id);
            const recordExist = await ChgDoctor.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('doctor') });
            res.status(ok).send({ doctor: recordExist });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async updateDoctor(req, res,) {
        try {
            const { id } = req.params;
            // const decId = getDecryptId(id);

            const { error } = validateDoctor(req.body, id); //decId
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            let recordExist = await ChgDoctor.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('doctor') });

            const doctor = await ChgDoctor.updateRecord( recordExist, req.body );
            if (!doctor) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(created).send({ doctor });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async deleteDoctor(req, res) {
        try {
            const { id } = req.params;
            // const decId = getDecryptId(id);
            let recordExist = await ChgDoctor.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('doctor') });

            const doctor = await ChgDoctor.deleteRecord( recordExist );
            if (!doctor) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(ok).send({ doctor });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}