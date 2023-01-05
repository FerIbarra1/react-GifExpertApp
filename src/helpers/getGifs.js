export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lols5GkGWGJY4wDYb9euihgda9tvL5vA&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}