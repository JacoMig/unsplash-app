import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faTags, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


export default function registerIcons() {
	library.add(faSearch, faUser, faTags, faThumbsUp, faCalendarAlt); 
}