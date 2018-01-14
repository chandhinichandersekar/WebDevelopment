server {
	listen 80;
	listen [::]:80;
	
	root /home/moonlight/hw01;
	
	index index.html;

	server_name hw01.chandhinichandersekar.com;

	location / {
		try_files $uri $uri/ =404;
	}

}
