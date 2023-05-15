import React from 'react'
import "../Contract/ContractStyle.css"
import { NavLink } from 'react-router-dom'

const Contract = () => {
  return (
    <div className='conrtractContainer'>
      <h1 className='contractTitle'>Términos y Condiciones</h1>
      <p className='contractParagraph'>
        Los términos y condiciones ("Términos") son un conjunto de términos
        legales😒 definidos por nosotros unilateralmente😁 a modo de mandato, que
        rigen las actividades de los visitantes de la página web en dicho sitio
        web y la relación entre los visitantes del sitio y el propietario del
        sitio web. Los Términos no son un acuerdo entre el propietario del sitio
        web y los usuarios de la página web; si te sirven bien y si no ajo y agua👌.
      </p>
      <p className='contractParagraph'>
        Esta página web es propiedad del EQUIPO 6 💪y está operado
        por [V. Peralta, P. Santurio, M. Wittemann y N .Ricoy]. Estos Términos establecen
        los términos y condiciones bajo los cuales tu puedes usar nuestra página web y
        servicios ofrecidos por nosotros. Esta página web ofrece a los visitantes un espacio
        ameno donde crear tus propias playlist 100% personalizadas. Al acceder o usar la
        página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado
        estar sujeto a estos Términos.
      </p>
      <h1 className='contractTitle'>¿Quién puede usar tu página web; ¿Cuáles son los requisitos
        para crear una cuenta?
      </h1>
      <p className='contractParagraph'>
        Para usar nuestra página web y / o recibir nuestros servicios, debes tener al menos 12
        años de edad, o la mayoría de edad legal en tu jurisdicción, y poseer la autoridad legal,
        el derecho y la libertad para participar en estos Términos como un acuerdo vinculante.
        No tienes permitido utilizar esta página web y / o recibir servicios si hacerlo está
        prohibido en tu país o en virtud de cualquier ley o regulación aplicable a tu caso.
      </p>
      <p className='contractParagraph'>
        Si decides acceder al servicio Premium ten en cuenta que: los precios que cobramos por
        usar nuestros servicios / para nuestros productos se enumeran en  la página web. Nos
        reservamos el derecho de cambiar nuestros precios💸🤑🫰 para los productos que se muestran en
        cualquier momento y de corregir los errores de precios que pueden ocurrir inadvertidamente.
        Información adicional sobre precios e impuestos sobre las ventas está disponible en la
        página de pagos.
        "La tarifa por los servicios y cualquier otro cargo que pueda incurrir en relación con tu uso del
        servicio, como los impuestos y las posibles tarifas de transacción, se cobrarán mensualmente a tu
        método de pago.
      </p>
      <h1 className='contractTitle'>Política de devoluciones y reembolsos</h1>
      <p className='contractParagraph'>
        No existe, si pagaste marchaste.👌😁
      </p>
      <h1 className='contractTitle'>Posesión de propiedad intelectual, derechos de autor y logos.</h1>
      <p className='contractParagraph'>
        El Servicio y todos los materiales incluidos o transferidos, incluyendo, sin limitación,
        software, imágenes, texto, gráficos, logotipos, patentes, marcas registradas, marcas de
        servicio, derechos de autor, fotografías, audio, videos, música y todos los Derechos de
        Propiedad Intelectual relacionados con ellos, son la propiedad exclusiva de [ni la menor idea].
        Salvo que se indique explícitamente en este documento, no se considerará que nada en estos
        Términos crea una licencia en o bajo ninguno de dichos Derechos de Propiedad Intelectual, y tu
        aceptas no vender, licenciar, alquilar, modificar, distribuir, copiar, reproducir, transmitir,
        exhibir públicamente, realizar públicamente, publicar, adaptar, editar o crear trabajos
        derivados de los mismos, en caso contrario reclamaremos porcentaje de las ganancias💁‍♂️.
      </p>
      <h1 className='contractTitle'>Derecho a suspender o cancelar la cuenta de usuario</h1>
      <p className='contractParagraph'>
        Podemos terminar o suspender de manera permanente o temporal tu acceso al servicio sin previo
        aviso y responsabilidad por cualquier razón, incluso si a nuestra sola determinación tu violas
        alguna disposición de estos Términos o cualquier ley o regulación aplicable. Puedes descontinuar
        el uso y solicitar cancelar tu cuenta y / o cualquier servicio en cualquier momento. Sin
        perjuicio de lo contrario en lo que antecede, con respecto a las suscripciones renovadas
        automáticamente a los servicios pagados, dichas suscripciones se suspenderán solo al vencimiento
        del período correspondiente por el que ya has realizado el pago.
      </p>
      <h1 className='contractTitle'>Limitación de responsabilidad</h1>
      <p className='contractParagraph'>
        De lo único que somos responsables es de nosotros mismos y hasta cierto punto🙄.
      </p>
      <h1 className='contractTitle'>Derecho a cambiar y modificar los Términos</h1>
      <p className='contractParagraph'>
        Nos reservamos el derecho de modificar estos términos de vez en cuando a nuestra entera
        discreción (cuando nos de la gana)🫰. Por lo tanto, debes revisar estas páginas periódicamente.
        Cuando cambiemos los Términos de una manera material, te notificaremos que se han realizado
        cambios importantes en los Términos. El uso continuado de la página web o nuestro servicio
        después de dicho cambio constituye tu aceptación de los nuevos Términos. Si no aceptas alguno
        de estos términos o cualquier versión futura de los Términos, no uses o  accedas (o continúes
        accediendo) a la página web o al servicio.
      </p>
      <p className='contractEnd'>¡Gracias por tu preferencia!😊</p>
      <NavLink to='/register2'>
        <button

          className='btn-standard'>Entendido</button>
      </NavLink>
    </div>
  )
}

export default Contract
