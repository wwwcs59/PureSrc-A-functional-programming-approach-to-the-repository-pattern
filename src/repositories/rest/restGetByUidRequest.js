import delivery from '../../delivery';

export default async function restGetByUidRequest(deliveryMethod, source, options, dataType, uid) {
  if (uid) {
    source += "/" + uid;
  }

  let data = await delivery(deliveryMethod, source, options, dataType);

  return data;
}