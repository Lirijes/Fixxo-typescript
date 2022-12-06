import React from 'react'
import { UserContext, IUserContext } from '../contexts/UserContext';

const CreateForm = () => {
    const { UserNew, setUserNew, create } = React.useContext(UserContext) as IUserContext

    return (
      <form onSubmit={create} className="d-grid mb-5">
        <h3 className="display-6 mb-4">Create User</h3>
        <input value={UserNew.firstName} onChange={(e) => setUserNew({...UserNew, firstName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your first name..." />
        <input value={UserNew.lastName} onChange={(e) => setUserNew({...UserNew, lastName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your last name..." />
        <input value={UserNew.email} onChange={(e) => setUserNew({...UserNew, email: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your e-mail address..." />
        <input value={UserNew.password} onChange={(e) => setUserNew({...UserNew, password: e.target.value })} type="password" className="form-control py-2 mb-3" placeholder="Enter your password..." />
        <button type="submit" className="btn btn-sucess py-2 mt-3">CREATE USER</button>
      </form>
    )
}

export default CreateForm