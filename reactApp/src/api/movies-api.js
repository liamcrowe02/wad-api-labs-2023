export const getMovies = async () => {
  const response = await fetch('http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const changePassword = async (currentPassword, newPassword) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ currentPassword, newPassword })
  });
  return response.json();
};
