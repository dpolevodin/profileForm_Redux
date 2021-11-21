import React from 'react'
import { useDispatch } from 'react-redux'
import { profileActions } from '../../store/profile'

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(profileActions.setProfile(null))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget

        const profile = {
            name: form['name'].value,
            lastName: form['lastName'].value,
        }

        dispatch(profileActions.setProfile(profile))

    }

    return (
        <form className="form form-login" onSubmit={handleSubmit}>
            <div className="field">
                <input type="text" name="name" autoComplete="off" />
            </div>

            <div className="field">
                <input type="text" name="lastName" autoComplete="off" />
            </div>
            <div>
                <button type="submit">Send</button>
                <button onClick={handleDelete}>Clear</button>
            </div>
        </form>
    )
}