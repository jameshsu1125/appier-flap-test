import QueryString from 'lesca-url-parameters';
import { memo } from 'react';
import './index.less';

const Home = memo(() => {
  const url = QueryString.get('url');

  return (
    <div className='Home'>
      <div id='parent-bg' />
      <div className='flex w-full items-center justify-center p-5'>
        <div className='flex w-full justify-center bg-gray-100 py-5'>
          {(url && <iframe src={decodeURIComponent(url)} width={320} height={480} />) || (
            <iframe src={'http://localhost:8081/'} width={320} height={480} />
          )}
        </div>
      </div>
      <div id='parent-bg' />
    </div>
  );
});

export default Home;
