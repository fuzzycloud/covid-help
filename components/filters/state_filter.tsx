import useSWR from "swr";
import {Form, Progress} from "react-bulma-components";

type StateFilterProps = {
    selectedState : string
    setSelectedState: (v: string) => void
    resetDistrict: () => void
}
export const StateFilter: React.FC<StateFilterProps> = props => {
    const {setSelectedState, resetDistrict, selectedState} = props;
    const {data, error} = useSWR<string[]>('/api/states');
    if (!data) {
        return <Progress color='primary' />
    }
    return <Form.Select value={selectedState} onChange={event => {
        setSelectedState(event.target.value);
        resetDistrict();
    }}>
        <option value={''}>Select State</option>
        {data.map(x => <option key={x} value={x}>{x}</option> )}
    </Form.Select>
}
