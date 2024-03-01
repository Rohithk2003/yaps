
export function getSubtitles(id) {
  return `https://api.opensubtitles.com/api/v1/subtitles?imdb_id=${id}`
}
export function downloadSubtitles() {
  return 'https://api.opensubtitles.com/api/v1/download'
}
export function getTVSubtitles(id,episode,season){
  return `https://api.opensubtitles.com/api/v1/subtitles?imdb_id=${id}&season_number=${season}&episode_number=${epsiode}`
}