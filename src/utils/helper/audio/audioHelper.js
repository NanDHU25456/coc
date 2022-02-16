const playOnlyOneAudio = (currentId) => {
  const audioIdList = ["audio", "audio-1", "audio-2"]
  const filteredList = audioIdList.filter(id => id !== currentId)

  filteredList.forEach(id => {
    const audioElement = document.getElementById(id)
    if (audioElement) {
      audioElement.pause()
    }
  })
}

export default playOnlyOneAudio