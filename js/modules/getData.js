export function getData(url) {
  const fetchResult = fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((atsInJs) => {
      return atsInJs;
    })
    .catch((error) => {
      console.warn('FETCH ivyko klaida:', error);
    });
  return fetchResult;
}

export async function getDataAsync(url) {
  try {
    const respUsers = await fetch(url);
    const atsInJs = await respUsers.json();
    return atsInJs;
  } catch (error) {
    console.warn('klaida klaidele');
  }
}
