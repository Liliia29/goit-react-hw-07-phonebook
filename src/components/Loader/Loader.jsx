import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      height="20"
      width="20"
      radius={1}
      color="cyan"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
