import {StyledList} from './List.styles'
type ListItem = {
  name: string | JSX.Element;
  url: string;
}

type ListProps = {
  listData: ListItem[];
}


 const List = ({listData} : ListProps) => {
    return (
        <StyledList>
            {
                listData.map((item, index) => {
                    const {name, url} = item;
                    return <li key={index}><a href={url}>{name}</a></li>
                })
            }
        </StyledList>
    )
}
export default List;