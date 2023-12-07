const fetchService = {
  get: <Response>(url: string): Promise<Response> =>
    fetch(url, {
      method: 'GET',
      headers: {},
    }).then((res) => {
      if (res.ok) return res.json();
      return res.text().then((text) => {
        console.error(text);
        throw new Error(text);
      });
    }),
};

export default fetchService;
