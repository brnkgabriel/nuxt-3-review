// export function useFetch(url) {
//   const data = ref(null)
//   const error = ref(null)

//   fetch(url)
//     .then(res => res.json())
//     .then(json => (data.value = json))
//     .catch(err => error.value = err)
  
//   return { data, error }
// }

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const doFetch = () => {
    // reset state before fetching...
    data.value = null
    error.value = null

    // unref() unwraps potential refs
    fetch(unref(url))
      .then(res => res.json())
      .then(json => (data.value = json))
      .catch(err => (error.value = err))
  }

  isRef(url) ? watchEffect(doFetch) : doFetch()

  return { data, error }
}