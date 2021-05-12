import useSWR from "swr";
import {Form, Progress} from "react-bulma-components";

type DistrictFilterProps = {
    state: string;
    district: string;
    setSelectedDistrict: (v: string) => void
}
export const DistrictFilter: React.FC<DistrictFilterProps> = props => {
    const {setSelectedDistrict, state, district } = props;
    const {data, error} = useSWR<string[]>(`/api/states/${state}`);
    if (!data) {
        return <Progress color='primary' />
    }
    return <Form.Select value={district} onChange={event => {
        setSelectedDistrict(event.target.value);
    }}>
        <option value={''}>Select District</option>
        {data.map(x => <option key={x} value={x}>{x}</option> )}
    </Form.Select>
}
