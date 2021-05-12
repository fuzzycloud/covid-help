import { Form, Progress } from 'react-bulma-components';
import useSWR from 'swr';
import { ServiceData } from '../service_data';

type ServiceFilterProps = {
  selectedService: string;
  setSelectedService: (v: string) => void;
};

export const ServiceFilter: React.FC<ServiceFilterProps> = (props) => {
  const { selectedService, setSelectedService } = props;
  const { data, error } = useSWR<ServiceData[]>('/api/services');
  if (!data) {
    return <Progress color="primary" />;
  }
  return (
    <Form.Select
      value={selectedService}
      onChange={(event) => {
        setSelectedService(event.target.value);
      }}
    >
      <option value={''}>Select Service</option>
      {data.map((x) => (
        <option key={x.title} value={x.title}>
          {x.title}
        </option>
      ))}
    </Form.Select>
  );
};
