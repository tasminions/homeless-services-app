import zensend  from 'zensend'

var client = new zensend.Client("Tw40TCl18EDda8eLW5hxMw");

export default function sendFormLink (number, body) => {
	client.sendSms({
	  originator: "FAC",
	  body: body,
	  number: number
	})
}
