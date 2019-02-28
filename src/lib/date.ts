import * as moment from 'moment'

type DateType = string | number | Date | moment.Moment

export const toDateFormat = (date: DateType, format) => {
  return moment(date).format(format)
}


