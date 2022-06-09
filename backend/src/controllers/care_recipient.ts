import { Request, Response, Router } from 'express'
import logging from '../config/logging'
import { Connect, Query } from '../config/mysql'

const NAMESPACE = 'CARE_RECIPIENT'

const getCareRecipientById = async (_: Request, res: Response) => {
  logging.info(NAMESPACE, 'Getting care recipient by id and filter by date')

  const care_recipient_id = _.body?.id
  const filter_date = _.body?.date

  if (!care_recipient_id) {
    return res.status(400).json({
      error: 'care recipient id cannot be empty',
    })
  } else {
    logging.info(
      NAMESPACE,
      'Getting care recipient care_recipient_id ' + care_recipient_id
    )
    logging.info(NAMESPACE, 'Getting care recipient filter_date ' + filter_date)

    let query = `select id, payload,timestamp,event_type FROM birdietest.events where care_recipient_id = "${care_recipient_id}" and timestamp like  "${filter_date}%"  ORDER BY timestamp ASC;`

    Connect()
      .then((connection) => {
        Query(connection, query)
          .then((results) => {
            logging.info(NAMESPACE, 'Retrieved care recipient: ', results)

            return res.status(200).json({
              results,
            })
          })
          .catch((error) => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(200).json({
              message: error.message,
              error,
            })
          })
          .finally(() => {
            logging.info(NAMESPACE, 'Closing connection.')
            connection.end()
          })
      })
      .catch((error) => {
        logging.error(NAMESPACE, error.message, error)

        return res.status(200).json({
          message: error.message,
          error,
        })
      })

    return res.status(404)
  }
}

export const careRecipientController = Router()

careRecipientController.get('/getCareRecipientById', getCareRecipientById)
