import { useState } from 'react';
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [isValid, setisvalid] = useState()
  const { dispatch } = useAuthContext()

  const signup = async (username,email, password) => {
    setIsLoading(true)
    setError(null)
    setisvalid(false)
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      setisvalid(false)
      console.log("une erreur s'est produite")
    }
    if (response.ok) {
      // save the user to local storage
    console.log("insertion effectuer avec success")
      dispatch({type: 'LOGIN', payload: json})
      setIsLoading(false)
      setisvalid(true)
    }
  }





  return { signup, isLoading, error, isValid }
}