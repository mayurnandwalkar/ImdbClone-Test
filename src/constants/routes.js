const APP_PATH = 'imdb';

export const routePath = {
    home        : `/`,
    categories  : `/${APP_PATH}/imdb`,
    movie       : `${APP_PATH}/movie`,
    movies      : `${APP_PATH}/movies`,
    topRated    : `${APP_PATH}/movies`,
    upcoming    : `${APP_PATH}/movies`,
    invalid     : `${APP_PATH}/*`
}