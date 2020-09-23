import React,{createContext, useState} from 'react';

export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [newQuery, setNewQuery] = useState('');
    const [photos, setPhotos] = useState('');
  
    /* const getProjects = async () => {
        const projectsRef = await app.database().ref().child('projects')
        projectsRef.orderByChild("uid").equalTo(currentUser.uid).on('value', function(snapshot) {
            setProjects(state => ({...state, ...snapshot.val()}))
        });
    } */

   /*  useEffect(() => {
      if(currentUser){
        getProjects()
      }else {return}
    }, [currentUser]) */

   /* useEffect(() => {
       app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
      }); 
    }, []);*/
  
   /*  if(pending){
      return <>Loading...</>
    } */
  
    return (
      <AppContext.Provider
        value={{
            newQuery,
            setNewQuery,
            photos,
            setPhotos
        }}
      >
        {children}
      </AppContext.Provider>
    );
};