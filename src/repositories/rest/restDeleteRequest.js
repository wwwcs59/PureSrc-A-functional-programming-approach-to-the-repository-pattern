import restDelivery from './restDelivery';

export default async function restUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid;
  }

  let data = await restDelivery(deliveryMethod, source, options, mapFromSource, mapToSource);

  return data;
}