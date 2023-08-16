import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/Ajitpatil92002/repos');
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className='p-4 my-4'>
      <h2 className='text-xl font-semibold mb-4'>Repositories</h2>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {repos.map((repo) => (
          <div key={repo.id} className='bg-white p-4 rounded-md shadow-md'>
            <h3 className='text-lg font-semibold mb-2'>{repo.name}</h3>
            <p className='text-gray-600 mb-2'>{repo.description}</p>
            <a
              href={repo.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
