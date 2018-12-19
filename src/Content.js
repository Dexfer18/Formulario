import React, { Component } from 'react';
//import './Content.css';
import './css/bootstrap.min.css';

class Content extends Component {
  render() {
    return ( 
     
     <div className="Content">
     <div class="container">
     <p>FAVOR DE LLENAR LOS CAMPOS COMO SE LE INDIQUE:</p>
        <div class="row">
     
              <div class="col-2">
                    <p>Colegiado:<input id="colegiado" type="text" placeholder="" class="form-control my-1"></input> </p>
              </div>
              <div class="col-2">
                    <p>Clave:<input id="clave" type="text" placeholder="" class="form-control my-1"></input> </p>
              </div>
        </div>
     </div>

     <div class="row">
     <div class="col-3"></div>
     <div class="col-3"></div>
     
              <div class="col-6 ">
                    <p>Guatemala:<input id="dia" type="text" ></input>de<input id="mes" type="text"></input>2018 </p>
              </div>
              
     
     </div>
     
     <div class="container">
            <div class="row">  
                <div class="col-2"> 
                  <p>
                  Señor director Archivo   General de Protocolos Edificio Jade
                  </p>
                </div>
            </div>
            
            <p>El (la) infrainscito (a) Notario (a)</p>
            <p>1er. Apellido: <input id="apellido" type="text" ></input>2do. Apellido<input id="apellido2" type="text"></input>Apellido de casado: <input id="apellidocasado" type="text"></input></p>
            <p>1er. Nombre: <input id="noombre" type="text" ></input>2do. Nombre:<input id="nombre2" type="text"></input>Otro nombre: <input id="otronombre" type="text"></input></p>
            <p><center>DECLARO:</center></p>
            <p>1. Bajo juramento que soy colegiado activo, que no ejerzo cargo publico a tiempo completo, ni tengo inhabilitacion ni impedimento legal alguno para el ejercicio notario.</p>
            <p><b>2. DOCUMENTO DE IDENTIFICACION PERSONAL: <input id="dpi" type="text" ></input></b> </p>
            <div class="checkbox">
            <p><b>ESTADO CIVIL: </b><input type="checkbox" name="checkbox" name="checkbox" oid="Casado"></input>
            <label for="checkbox">Casado</label>

            <input type="checkbox" name="checkbox2" name="checkbox2" oid="Soltero"></input>
            <label for="checkbox2">Soltero</label>
            </p>

            <p><b>NIT:</b> <input id="nit" type="text" ></input></p>   

            <p><b>FORMACION PROFECIONAL:</b></p>
            <p>Si poseee algun postgrado o doctorado, Espesifiquelo:<input id="espesificacion" type="text" placeholder="" class="form-control my-1"></input> 
            <input id="espesificacion" type="text" placeholder="" class="form-control my-1"></input>
            </p>   

            <p><b>DATOS DE SEDE NOTARIAL / LUGAR DE TRABAJO: </b></p>
            <p>Direccion:<input id="direccion" type="text" placeholder="" class="form-control my-1"></input></p> 
                  <form>
                              <div class="row">
                                    <div class="col"> Municipio: 
                                          <input type="Municipio" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Departamento
                                          <input type="Departamento" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>


                        <p>No.(s) Telefono(s):
                               <input id="telefonos" type="text" placeholder="" class="form-control my-1"></input> 
                        </p>  
                  <form>
                              <div class="row">
                                    <div class="col"> Correo Electronico: 
                                          <input type="email" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Celular:
                                          <input type="Celular" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>

      </div> 
      <p></p>
      <p><b>DATOS DE RESIDENCIA:</b></p>  
      <p>Direccion:<input id="direccion1" type="text" placeholder="" class="form-control my-1"></input></p> 
                  <form>
                              <div class="row">
                                    <div class="col"> Municipio: 
                                          <input type="Municipio1" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Departamento
                                          <input type="Departamento1" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>


                        <p>No.(s) Telefono(s):
                               <input id="telefonos1" type="text" placeholder="" class="form-control my-1"></input> 
                        </p>  
                  <form>
                              <div class="row">
                                    <div class="col"> Correo Electronico: 
                                          <input type="email1" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Celular:
                                          <input type="Celular1" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>
      <p></p>
      <p>3. señalo para recibir correspondencia, notificaciones y/o citaciones, la direccion de mi sede notarial/ lugar de trabajo indicada y/o la direccion del depositario designado por este medio.</p>
      <p></p>
      <p><b>El archivo General de Protocolos ya cuenta con el servicio de consulta a distancia, para crear su usuario avogenes al Registro Electronico de Nnotarios, 2do nivel de Edificio Jade o culaquier Delegacion de Archivo </b></p>
      <p></p>
      <p>4. Para el caso de ausencial, el protocolo del cual soy depositario quedara a cargo del notario:</p>

                   <form>
                              <div class="row">
                                    <div class="col"> 1er.Apellido: 
                                          <input type="apellido3" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> 2do Apellido:
                                          <input type="apellido4" class="form-control" placeholder="-----"></input>
                                    </div>
                                    <div class="col"> Apellido casado:
                                          <input type="apellidocasado3" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>

                  <form>
                              <div class="row">
                                    <div class="col"> 1er.Nombre: 
                                          <input type="apellido5" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> 2do. Nombre:
                                          <input type="apellido5" class="form-control" placeholder="-----"></input>
                                    </div>
                                    <div class="col"> Otros nombres:
                                          <input type="apellidocasado5" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>
      <p></p>
      <p>Quien tiene el conocimiento de la presente designacion y de las consecuencias y obligaciones que 
            conlleva , cargo que acepta y firma la presente solicitud y señala como lugar para citaciones,notificaciones o requerimientos       </p>
      
            <p>Direccion:<input id="direccion1" type="text" placeholder="" class="form-control my-1"></input></p> 
                  <form>
                              <div class="row">
                                    <div class="col"> Municipio: 
                                          <input type="Municipio4" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Departamento
                                          <input type="Departamento4" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>


                        <p>No.(s) Telefono(s):
                               <input id="telefonos1" type="text" placeholder="" class="form-control my-1"></input> 
                        </p>  
                  <form>
                              <div class="row">
                                    <div class="col"> Correo Electronico: 
                                          <input type="email4" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Celular:
                                          <input type="Celular4" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>
      
      <p></p>
      <p> 5. En el caso de que mi depositario no pueda ser localizado comunicarse con (padre, madre, conyugue u otro 
            pariente cercano notario que solicita la apertura):
      </p>
      <form>
                              <div class="row">
                                    <div class="col"> 1er.Apellido: 
                                          <input type="apellido6" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> 2do Apellido:
                                          <input type="apellido6" class="form-control" placeholder="-----"></input>
                                    </div>
                                    <div class="col"> Apellido casado:
                                          <input type="apellidocasado6" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>

                  <form>
                              <div class="row">
                                    <div class="col"> 1er.Nombre: 
                                          <input type="apellido6" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> 2do. Nombre:
                                          <input type="apellido6" class="form-control" placeholder="-----"></input>
                                    </div>
                                    <div class="col"> Otros nombres:
                                          <input type="apellidocasado" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>
                  <p></p>


                  <p> Quien puede ser localizado (a) en: </p>
                        
            <p>Direccion:<input id="direccion1" type="text" placeholder="" class="form-control my-1"></input></p> 
                  <form>
                              <div class="row">
                                    <div class="col"> Municipio: 
                                          <input type="Municipio4" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Departamento
                                          <input type="Departamento4" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>


                        <p>No.(s) Telefono(s):
                               <input id="telefonos1" type="text" placeholder="" class="form-control my-1"></input> 
                        </p>  
                  <form>
                              <div class="row">
                                    <div class="col"> Correo Electronico: 
                                          <input type="email4" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Celular:
                                          <input type="Celular4" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form>

           <p></p>
           <p> 6.  Indicar si ejerce cargo publico <b>SIN IMPEDIMENTO para el ejercicio del notario</b>
           <div class="checkbox">

            <center><input type="checkbox" name="checkbox" name="checkbox" oid="si"></input>
            <label for="checkbox3">SI</label>

            <input type="checkbox" name="checkbox2" name="checkbox2" oid="no"></input>
            <label for="checkbox4">NO</label></center>
            </div>
           </p> 
           <p>Dependecia: <input type="dependecia" class="form-control" placeholder=""></input></p>
           <p>Nombre de cargo: <input type="cargo" class="form-control" placeholder=""></input> </p>
           <form>
                              <div class="row">
                                    <div class="col"> Horas laborales: 
                                          <input type="horaslab" class="form-control" placeholder="-------"></input>
                                    </div>
                                    <div class="col"> Region:
                                          <input type="region" class="form-control" placeholder="-----"></input>
                                    </div>
                              </div>
                  </form> 
                  <p></p>
                  <p class="text-danger"><b> *Si ejercio cargo publico con impedimento para el ejercicio de notario,
                        anterior a la presente solicitud, favor llenar el formulario "CESE DE CARGO PUBLICO"</b></p>
                  <p></p>

                  <p>Cualquier <b>modificacion a los datos indicados, lo avisare inmediatamente a ese Archivo.
                        Asi mismo si variare o cambiare mi firma y/o sello profesional, efectuare el tramite respectivo.</b></p>
      
            <p></p>
            <p> Con base a lo anterior,</p>

                  <p><center><b>Solicito:</b></center></p>
                  <p> A) Se mande a ingresar a la base de datos del Registro Electronico de Nnotarios,
                        la informacion proporcionada y 
                  </p>
                  <p> B) Se me extienda la orden y recibo de ingresos judiciales para el pago del derecho de 
                        apertura anual de protocolo correspondiente al año 2017
                  </p>


          
                  
      </div>
      <div class="container">
        <div class="row">
     
              <div class="col-6">
              <p><center>FIRMA NOTARIO (A)</center></p>
              </div>
              <div class="col-6">
                    <p><center>SELLO NOTARIO (A)</center></p>
              </div>
        </div>
     </div>
     <p></p>
     <p></p>

     <div class="container">
        <div class="row">
     
              <div class="col-6">
              <p><center>FIRMA DEPOSITARIO (A)</center></p>
              </div>
              <div class="col-6">
                    <p><center>SELLO DEPOSITARIO (A)</center></p>
              </div>
        </div>
     </div>
      </div>
           
    );
  }
}

export default Content;