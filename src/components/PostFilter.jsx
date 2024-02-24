
import Input from "./UI/Input";
import Select from "./UI/Select";

function PostFilter({filter, setFilter, children}) {
    return ( 
        <div >
          <Input
          placeholder = "Поиск"
          value = {filter.query}
          onChange = {e => setFilter({...filter, query:e.target.value})}
          />
          <div className="forms">
          <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue= "Сортировка по"
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'},
            ]}
          />
         {children}
          </div>
       </div>
     );
}

export default PostFilter;