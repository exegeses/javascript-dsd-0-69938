// metodo splice (curso 3 de arreglos y objetos)

//puedo quitar datos y al mismo tiempo agregar otros en esa misma posición

var empleados=[ 'juan', 'roberto' , 'maria' , 'ana' ];
console.log( empleados );

//Array.splice( inicio, cantidad a eliminar, elementos a agregar en inicio )
empleados.splice( 2,1, 'carla');

console.log(empleados);  //muestra = juan , roberto , carla , ana ?