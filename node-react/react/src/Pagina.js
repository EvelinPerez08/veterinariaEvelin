import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad, crearEditarEntidad, eliminarEntidad, obtenerUno } from "./servicio";
import Componentecampos from "./componentes/componentecampo";


const opcionesIniciales = {
    tipo: [
        { valor: "Perro", etiqueta: "Perro" },
        { valor: "Gato", etiqueta: "Gato" },
        { valor: "Pájaro", etiqueta: "Pájaro" },
        { valor: "Otro", etiqueta: "Otro" },
    ],
    diagnostico: [
        { valor: "Prurito de piel (sarna)", etiqueta: "Prurito de piel (sarna)" },
        { valor: "Moquillo", etiqueta: "Moquillo" },
        { valor: "Trauma", etiqueta: "Trauma" },
        { valor: "Parvovirosis", etiqueta: "Parvovirosis" },

    ],
    mascota: [],
    veterinario: [],
    dueno: []

};

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostraModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: "POST",
            columnas: [],
            options: opcionesIniciales,
        };
    }

    cambiarModal = (_evento, method = "POST", newState = {}) => {
        let _newState = {
            ...newState,
            mostraModal: !this.state.mostraModal,
            method,
        };
        if (method === "POST") {
            _newState = {..._newState, idObjeto: null, objeto: {} };
        }
        this.ObtenerOpcionesBackend(_newState);
    };

    listar = async() => {
        const { entidad } = this.props;
        const entidades = await listarEntidad({ entidad });
        let columnas = [];
        if (Array.isArray(entidades) && entidades.length > 0) {
            columnas = Object.keys(entidades[0]) || [];
        }
        this.setState({ entidades, columnas });
    }

    manejarIput = (evento) => {

        const { target: { value, name }, } = evento;

        let { objeto } = this.state;

        objeto = {...objeto, [name]: value };

        this.setState({ objeto });
    }

    crearEntidad = async(_evento = null) => {
        const { entidad } = this.props;
        let { objeto, method, idObjeto } = this.state;
        await crearEditarEntidad({ entidad, objeto, method, idObjeto });
        this.cambiarModal(_evento, "POST", { objeto: {}, idObjeto: null });

    }
    ObtenerOpcionesBackend = async(_evento, index) => {
        const { entidad } = this.props;
        const { options } = this.state;
        const objeto = await obtenerUno({ entidad, idObjeto: index });
        const mascotasPomise = listarEntidad({ entidad: "mascotas" });
        const veterinariosPomise = listarEntidad({ entidad: "veterinarios" });
        const duenosPomise = listarEntidad({ entidad: "duenos" });
        let [mascota = [], veterinario = [], dueno = []] =
        await Promise.all([mascotasPomise, veterinariosPomise, duenosPomise]);
        mascota = mascota.map((_mascota, index) => ({
            valor: index,
            etiqueta: `${_mascota.nombre} (${_mascota.tipo})`,
        }));
        veterinario = veterinario.map((_veterinario, index) => ({
            valor: index.toString(),
            etiqueta: `${_veterinario.nombre} (${_veterinario.tipo})`,
        }));
        dueno = dueno.map((_dueno, index) => ({
            valor: index,
            etiqueta: `${_dueno.nombre} (${_dueno.tipo})`,
        }));
        const nuevasOpciones = {...options, mascota, veterinario, dueno };
        console.log({ nuevasOpciones });
        this.setState({...newState, options: nuevasOpciones });
    };
    editarEntidad = async(_evento, index) => {
        const { entidad } = this.props;
        const objeto = await obtenerUno({ entidad, idObjeto: index });
        this.setState({ objeto, idObjeto: index }, () => {
            this.cambiarModal(null, "PUT");
        });

    };
    eliminarEntidad = async(_evento, index) => {
        const { entidad } = this.props;
        const respuesta = await eliminarEntidad({ entidad, idObjeto: index });
        console.log({ respuesta });
        this.listar();
    }
    componentDidMount() {
        this.listar();
    }
    componentWillMount() {
        debugger;
    }
    componentWillReceiveProps() {
        debugger;
    }
    shouldComponentUpdate() {
        debugger;
        return true;
    }
    componentWillUpdate() {
        debugger;
    }
    componentWillUnmount() {
            debugger;
        }
        //render siempre va al ultimo
    render() {
        const { titulo = "Pagina sin titulo", entidad } = this.props;
        const { columnas, idObjeto, entidades, objeto, options } = this.state;
        console.log({ titulo, columnas });
        return ( < >
                <
                ActionsMenu manejarInput = { this.manejarInput }
                cambiarModal = { this.cambiarModal }
                titulo = { titulo }
                />  <
                Tabla entidades = { entidades }
                ediarEntidad = { this.ediarEntidad }
                eliminarEntidad = { this.eliminarEntidad }
                columnas = { columnas }
                />   {
                this.state.mostraModal && ( <
                    Modal cambiarModal = { this.cambiarModal }
                    manejarInput = { this.manejarIput }
                    crearEntidad = { this.crearEntidad }
                    entidad = { entidad }
                    idObjeto = { idObjeto } > {
                        columnas.map((columna, index) => { <
                            Componentecampos
                            key = { index }
                            manejarInput = { this.manejarInput }
                            objeto = { this.state.objeto }
                            nombreCampo = { columna }
                            options = { options }
                            />;
                        ))
                    } <
                    /Modal>

                )
            } <
            / >
    );
}

}

export default Pagina;