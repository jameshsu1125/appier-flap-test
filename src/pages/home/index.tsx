import { memo, useEffect } from 'react';
import QueryString from 'lesca-url-parameters';
import './index.less';

const urls: { [key: string]: string } = {
  '1': 'https://30table.bitbucket.io/studio-template/2024-10-18__73d16/preview/',
  '0.5': 'https://30table.bitbucket.io/studio-template/2024-10-18__86a3e/preview/',
  '0': 'https://30table.bitbucket.io/studio-template/2024-10-18__1e556/preview/',
  image: 'https://30table.bitbucket.io/studio-template/2024-10-18__ca0b7/preview/',
  video: 'https://30table.bitbucket.io/studio-template/2024-10-18__57d46/preview/',
};

const Home = memo(() => {
  const threshold = QueryString.get('threshold');

  return (
    <div className='Home'>
      <div id='parent-bg' />
      <div className='flex w-full items-center justify-center p-5'>
        <div className='flex w-full justify-center bg-gray-100 py-5'>
          {threshold && urls[threshold] && (
            <iframe src={urls[threshold]} width={320} height={480} />
            // <iframe src={'http://localhost:8081/'} width={320} height={480} />
          )}
        </div>
      </div>
      <div id='parent-bg' />
    </div>
  );
});

export default Home;
