const obj = {
    "groups": {
        "gestion": {
            "types": {
                "planificacion_complementaria": {
                    "instruments": {
                        "unidades_de_planificacion_rural": {
                            "name": "Unidades de planificación rural (UPR)",
                            "definition": "delimitan el crecimiento urbano de un municipio. Proponen una división del territorio rural en áreas de conservación, agrícolas o ganaderas; en algunos casos, incluyen áreas de expansión de la frontera agrícola. ",
                            "context": "Pueden incluirse dentro del POT o EOT en cualquier municipio.",
                            "requirements": "requieren una proyección mínima de 10 años, por lo menos, con un diagnóstico de vocación y aptitud del suelo que se articule con beneficios en impuestos.",
                            "which": "Puede combinarse con instrumentos de mercado, de comando y control, voluntarios, de formación y educación y todos los financieros, excepto plusvalía.",
                            "institutions": "Secretaría o Departamento Municipal de Planeación."
                        },
                        "planes_parciales": {
                            "name": "Planes parciales",
                            "definition": "establecen el aprovechamiento de los espacios privados: usos específicos, intensidades de uso y edificabilidad, obligaciones de cesión, construcción y dotación de equipamientos, espacios y servicios públicos (Art. 19, Ley 388/1997). Desarrollan y complementan las disposiciones del POT para áreas determinadas del suelo urbano y para aquellas incluidas en el suelo de expansión urbana, además de las que deban desarrollarse mediante UAU, macroproyectos u otras operaciones urbanas especiales.",
                            "context": "En las áreas de expansión urbana, en áreas determinadas del suelo urbano, en áreas de desarrollo de cargas y beneficios y en macroproyectos.",
                            "requirements": "los tratamientos urbanísticos se deben definir en el POT; también es necesario garantizar disponibilidad de recursos para la ejecución, planos y cronograma de acciones, así como la distribución equitativa de las cargas y los beneficios entre los participantes [1]. Además, es clave contar con una financiación previa.",
                            "which": "Se pueden articular con: unidades de actuación urbanística, unidades de gestión, impuestos, cobros y cargos.",
                            "institutions": "Secretaría o Departamento de Planeación del municipio."
                        }
                    }
                },
                "intervencion_estructura_predial": {
                    "instruments": {
                        "integracion_inmobiliaria": {
                            "name": "Integración inmobiliaria",
                            "definition": "permite englobar predios para que se realicen proyectos de desarrollo de ciudad en un municipio dentro de un plan parcial o UPR. Los suelos de un municipio pueden destinarse a desarrollo, consolidación, expansión o renovación para asegurar el reparto equitativo de cargas y beneficios.",
                            "context": "En suelo urbano con tratamientos de renovación urbana, redesarrollo o actualización.",
                            "requirements": "debe existir un plan parcial o UPR previos; asimismo, debe haber sido aprobada junto con la UAU o autorizada por el plan parcial y contar con el consentimiento del 51% de los derechos de los propietarios.",
                            "which": "Se integra con instrumentos de planificación y algunos económicos para darle fortaleza a la acción, como impuestos para generar flujo de caja o transferencia de derechos de construcción para beneficiar unas zonas por encima de otras.",
                            "institutions": "Secretaría o Departamento de Planeación Municipal, en asocio con Secretaría de Hábitat en el caso de Bogotá o departamento específico dependiente de esta, según el tamaño del municipio."
                        },
                        "reajuste_de_terrenos": {
                            "name": "Reajuste de terrenos",
                            "definition": "consiste en englobar diversos lotes de terreno para subdividirlos de forma más adecuada y dotarlos de obras de infraestructura urbana básica, tales como vías, parques, redes de acueducto, alcantarillado, energía y teléfonos [2]. Busca obtener una mejor configuración del terreno y garantizar una justa distribución de las cargas y beneficios. ",
                            "context": "En suelos que van a ser desarrollados a partir de planes parciales previstos por el POT, especialmente de expansión o de desarrollo.",
                            "requirements": "aprobación junto con la UAU o autorización del plan parcial, además de contar con el consentimiento del 51% de los derechos de los propietarios.",
                            "which": "No necesita de otro grupo; se complementa con los demás para hacer los predios homogéneos en un contexto de desarrollo de municipio. ",
                            "institutions": "en municipios pequeños, el Departamento o Dirección de Planeación Municipal; en los grandes, hay dependencias o incluso instituciones específicas como la Caja de Vivienda Popular en Bogotá."
                        }
                    }
                },
                "reparto_de_recargas_y_beneficios": {
                    "instruments": {
                        "unidades_de_actuacion_urbanistica": {
                            "name": "Unidades de actuación urbanística (UAU)",
                            "definition": "permite promover el uso racional del suelo, garantizar el cumplimiento de las normas urbanísticas y facilitar la dotación, con cargo a sus propietarios, de la infraestructura para el transporte, los servicios públicos domiciliarios, los equipamientos colectivos y espacios verdes.",
                            "context": "Normalmente en municipios por encima de los 100 mil habitantes, cuando existe necesidad de enfocar un desarrollo en específico y se cuenta con recursos monetarios.",
                            "requirements": "son fijados en el POT o su equivalente. Su duración de establecimiento es de al menos 2 años. El proyecto debe quedar explícitamente señalado en el plan parcial y ser diseñado y construido en los suelos urbanos y de expansión, así como en tratamientos de renovación urbana o redesarrollo como una unidad de planeamiento. Es necesario, asimismo, dejar claro el terreno donde se desarrollará, las acciones o zonas tendrán beneficios y aquellas sobre las que se debe pagar una carga (vía, parque, etc.) [3].",
                            "which": "Se articula con instrumentos económicos como impuestos, de mercado, y financieros, como fiducias y préstamos, porque requieren una gran inversión monetaria.",
                            "institutions": "Secretaría o Dirección de Planeación Municipal, en conjunto con la de Vivienda o quien haga sus veces."
                        },
                        "unidades_de_gestion": {
                            "name": "Unidades de gestión",
                            "definition": "corresponden al área objeto de un proyecto que se desarrolla en el marco de la UAU (Ley 388/1997, Art. 19).",
                            "context": "Se pueden desarrollar en un año y con aprobación de planes parciales.",
                            "requirements": "se debe solicitar una licencia para ejecutar las obras de urbanización de los predios que conforman el proyecto de delimitación de la unidad y garantizar el reparto equitativo de las cargas y beneficios asignados a la respectiva unidad.",
                            "which": "Se articulan con instrumentos económicos, como impuestos, y de mercado y financieros, como fiducias y préstamos, porque requieren una gran inversión monetaria.",
                            "institutions": "Secretaría Distrital de responsables de aplicar el instrumento de escala intermedia."
                        },
                        "asignacion_del_reparto_de_cargas_y_beneficios": {
                            "name": "Asignación del reparto de cargas y beneficios",
                            "definition": "determina, a través de planes parciales o UPR y según el uso que ha estipulado el POT, qué zonas y predios reciben beneficios como menos impuestos, mayor terreno o altura para aprovechar y más o menos espacios verdes. De esta manera, garantiza que cada participante de un plan parcial obtenga una participación de los beneficios en la misma proporción que su participación en los aportes.",
                            "context": "Se aplica en las UAU que conforman el PPRU mediante la equiparación de las cargas y beneficios que le corresponden a cada UAU, de acuerdo con los aportes, cuando se tienen claros los tratamientos de la ciudad, los tipos de suelos y la planificación del municipio.",
                            "requirements": "contar con zonas delimitadas, un plan maestro y planes parciales. La metodología es flexible. Es importante garantizar el criterio de equidad en su aplicación.",
                            "which": "Con impuestos y tasas, con otros de gestión del suelo y con formulación de proyectos.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces."
                        }
                    }
                },
                "intervencion_en_la_propiedad": {
                    "instruments": {
                        "enajenacion": {
                            "name": "Enajenación voluntaria",
                            "definition": "se refiere a la venta voluntaria de inmuebles que son declarados de utilidad pública o interés social [4]. Regulada por la Ley 9/198 (Art. 9 - 17) y por la Ley 388/1997 (Art. 58 - 62 y 119).",
                            "context": "Se usa en casos en los que el municipio necesita el predio y el propietario se niega a su venta, teniendo como precedente la declaratoria de utilidad pública y el derecho de preferencia [4].",
                            "requirements": "tener clara la zona de preferencia de intervención y realizar el estudio de títulos para determinar quién posee la titularidad del predio. El tiempo para el trámite depende de las particularidades de cada predio y de la entrega de la documentación completa.",
                            "which": "Con instrumentos financieros, para poder adquirir el predio, y con económicos, para apoyar la compra del predio.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces."
                        },
                        "expropiacion_por_via_administrativa": {
                            "name": "Expropiación por vía administrativa",
                            "definition": "adquisición de predios cuando no se da una enajenación voluntaria o en caso de una emergencia imprevista (Ley 9/1989 y 388/1997, Art. 61) [5].",
                            "context": "Se solicita en predios que el municipio necesita adquirir para desarrollar un proyecto. ",
                            "requirements": "solo procede cuando la destinación del bien expropiado corresponda a alguno de los fines previstos expresamente en la ley de utilidad pública o interés social.",
                            "which": "Se puede combinar con cualquiera de los instrumentos de gestión del suelo, económicos o de financiación.  ",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces."
                        },
                        "declaratoria_de_desarrollo_y_construccion_prioritaria": {
                            "name": "Declaratoria de desarrollo y construcción prioritaria",
                            "definition": "tiene como objetivo garantizar el desarrollo de los predios urbanizables no urbanizados y de los predios urbanizados no construidos, atendiendo a las estrategias, parámetros y directrices señaladas en el POT [6]. Impulsa el desarrollo en un municipio, al dinamizar la gestión del suelo en el interior de un perímetro urbano. Busca evitar que terrenos de engorde u ociosos sean desarrollados. Establecido por la Ley 388/1997 (Cap. VII).",
                            "context": "En predios urbanizables no urbanizados y predios urbanizados no construidos. Las formas de actuación tienen un tiempo de máximo dos años desde el momento en que queda en firma la resolución que identifica el predio [6].",
                            "requirements": "claridad del plan del municipio para identificar en qué predios aplicar.",
                            "which": "Se articula con planes parciales dentro de los que hay combinación con el impuesto predial e incentivos para que propietarios vendan y se consolide un desarrollo en un tiempo determinado.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces."
                        },
                        "derechos_de_preferencia": {
                            "name": "Derechos de preferencia",
                            "definition": "es el derecho en favor de los bancos inmobiliarios a tener la primera opción en la enajenación de inmuebles que según el POT y el PDM estén ubicados en zonas destinadas al desarrollo de los motivos de utilidad pública (Ley 9/89 Art. 73 y 74) [2].",
                            "context": "Cuando se requiere adquirir predios para zonas a conservar. No se necesita financiación para su realización.",
                            "requirements": "contar con zonas o predios a adquirir y con inscripción de afectación en matrícula inmobiliaria. Los motivos de utilidad pública serán los expresados en el artículo 58 de la Ley 388/97. Mediante resolución, los representantes legales de los bancos inmobiliarios determinan los inmuebles sobre los cuales ejercerá el derecho de preferencia; disponen de 3 meses para ejercer derecho de preferencia y 6 meses para perfeccionar la transacción.",
                            "which": "Con instrumentos económicos como el banco de tierras y los impuestos que, según donde se emplace, serán mayores para venta o menores para incentivar la inversión.",
                            "institutions": "Secretaría de Planeación Municipal con aprobación del alcalde. Si no existe banco inmobiliario, el derecho lo ejerce el municipio a través del alcalde."
                        },
                        "derechos_de_propiedad": {
                            "name": "Derechos de propiedad",
                            "definition": "se define como una autorización a un individuo o grupo para ejercer acciones de forma exclusiva sobre un bien, zona o servicio y administrar el control de los recursos que en ellos existen. Pueden ser: individuales, colectivos, de propiedad del Estado [7].",
                            "context": "Cuando predios privados que hacen parte de los sistemas municipales de áreas protegidas pueden definir una tarifa de acceso a sus áreas para el disfrute, ya sea contemplativo o de acceso a los servicios de los ecosistemas, permitiendo que los privados tengan un ingreso que no afecta al municipio.",
                            "requirements": "reglamentación por decreto, resolución o ley que desde el municipio establezca qué derechos se tienen.",
                            "which": "Se deben combinar con los instrumentos de gestión, en cuanto a zonas especiales, y con los de financiación, para asegurar que no se realicen acciones diferentes a las estipuladas por el derecho. Vinculado a este tipo de derechos, surgen las tarifas, que permiten el acceso a una propiedad con derechos privados pero que pueden tener un acceso público.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la Secretaría de Vivienda o quien haga sus veces."
                        },
                        "banco_de_tierras": {
                            "name": "Bancos de tierras",
                            "definition": "identificados por la Ley 388/1997 (Art. 118) como bancos inmobiliarios, pueden constituirse como establecimientos de origen público, empresa comercial o social del Estado o sociedad de economía mixta. Se les incluye la disposición de ser un administrador de bienes fiscales, si así el municipio lo dispone. Permite determinar cuánto terreno hay en un municipio para desarrollos específicos y canjear esa tierra por zonas o proyectos dónde realizarlos. Tienen por principio intervenir el precio del suelo y anticiparse a la captura de plusvalías; además, pueden ser usados para convertir el pago de cargas en tierras urbanizables del municipio [2].",
                            "context": "Pueden ser usados por los municipios, los distritos y las áreas metropolitanas para canjear por zonas para la conservación.",
                            "requirements": "un mínimo de tierras de 10.000 m2 y claridad sobre quién administra y desde qué institución se crea para su puesta en marcha. ",
                            "which": "Se pueden articular con los instrumentos de formulación de proyectos, para financiación, y con los de planes parciales: UPR y actuaciones urbanísticas.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces. Estas se deben coordinar con la Secretaría o Departamento de Hacienda para establecer rubros y valores."
                        },
                        
                    }
                }
            }
        },
        "economicos": {
            "types": {
                "comando_y_control": {
                    "instruments": {
                        "impuestos": {
                            "name": "Impuestos",
                            "definition": "se utilizan para que las empresas y personas cambien su actitud respecto al manejo del medio ambiente. Los hay del orden nacional, que pueden servir para financiación: p. e., el recaudo por rodamiento, la sobretasa a la gasolina; y también locales, el municipio determina el sector al que le incrementa o disminuye el valor a pagar: p. e., el predial puede ser mayor en zonas muy transformadas o contaminadas y menor, o incluso exento, para zonas de conservación. El predial, ICA y la delineación urbana, en algunos casos, sirven para incentivar o desincentivar la conservación.",
                            "context": "Cuando se quiera cambiar el comportamiento de los ciudadanos respecto al manejo del medio ambiental.",
                            "requirements": "conocer al sector, zona o persona natural o jurídica sobre los que se impartirá. En el caso de los municipales, deben pasar por aprobación del concejo municipal.",
                            "which": "Con instrumentos de gestión como planes parciales y de financiación si se desea dar mayores beneficios a la disminución por impuestos.",
                            "institutions": "a nivel municipal, la Secretaría o el Departamento de Hacienda. En el orden nacional, el Ministerio de Hacienda y Crédito Público."
                        },
                        "tasas": {
                            "name": "Tasas",
                            "definition": "es un tipo de cobro que se hace en dos vías: por la prestación del servicio y para la sostenibilidad del recurso que lo provee. Toda tasa tiene destinación específica según el impacto por utilización directa o indirecta de la atmósfera, el agua y del suelo, para introducir o arrojar desechos o desperdicios agrícolas, mineros o industriales, aguas negras o servidas de cualquier origen, humos, vapores y sustancias nocivas que sean resultado de actividades antrópicas o propiciadas por el hombre.",
                            "context": "Se aplican cuando se impacta de forma negativa algún recurso natural. Son recaudadas por las autoridades ambientales quienes, junto con los municipios, pueden realizar proyectos con objetivos acordes a la destinación establecida para la tasa.",
                            "requirements": "se han normado en la Ley 99/1993 (Art. 42-44), excepto la sobre tasa a la gasolina.",
                            "which": "Con instrumentos de gestión, para priorizar las áreas y zonas, tanto de recepción de ingresos como de inversión, y mejorar el recurso.",
                            "institutions": "Ministerio de Ambiente y Desarrollo Sostenible, en coordinación con el de Hacienda y Crédito Público."
                        },
                        "multas": {
                            "name": "Multas",
                            "definition": "son pagos por infringir una norma; son poco eficientes en el cambio de comportamiento y en su recaudación.",
                            "context": "Usualmente se utilizan cuando se quiere cambiar el comportamiento de las personas frente a la conservación del medio ambiente, bajo el principio “quien contamina paga”.",
                            "requirements": "contar con mecanismos de vigilancia.",
                            "which": "Con instrumentos de formación y educación.",
                            "institutions": "Secretaría o Departamento de Hacienda, en conjunto con la institución delegada en el Código de Policía."
                        },
                        "peajes": {
                            "name": "Peajes",
                            "definition": "son cobros por retribución de una obra realizada para la circulación de vehículos de diferentes tamaños y capacidades. Se han venido implementando, de manera adicional, en la recuperación de ecosistemas como mecanismo impositivo por la afectación de la vía construida (Ley 981/ 2005).",
                            "context": "Por su naturaleza nacional, se aplica si la nación ya lo ha determinado para ese lugar.",
                            "requirements": "debe tratarse de vías próximas o situadas en áreas de conservación como sitios RAMSAR, reservas de la biosfera, zonas de amortiguación, etc. Los recursos serán destinados exclusivamente para la ejecución de planes, programas y proyectos orientados a recuperación y conservación de las áreas afectadas por las vías de hecho [8].",
                            "which": "Con instrumentos voluntarios, si está en una zona muy apartada de lo urbano, o con compensaciones por edificabilidad, si limita con lo urbano.",
                            "institutions": "Ministerio de Hacienda y Crédito Público, Ministerio de Transporte y el Ministerio de Ambiente y Desarrollo Sostenible, en algunos casos."
                        },
                        "tarifas": {
                            "name": "Tarifas",
                            "definition": "se utilizan para controlar el acceso a ciertas áreas y aportar a su conservación. Es de orden tanto público como privado.",
                            "context": "Cuando se tiene un POT u otro instrumento de planificación aprobado.",
                            "requirements": "tener definida la propiedad de la zona a la cual se le van a aplicar.",
                            "which": "Se combina con los instrumentos de gestión, en lo que a planes parciales se refiere y con los de financiación y con los de formulación de proyectos, por cuanto lo que se recauda, en la mayoría de los casos, no es suficiente para la sostenibilidad del área a conservar.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda, o quien haga sus veces, y se coordina con la Secretaría o Departamento de Hacienda para determinar valores y mecanismos de recaudo si el instrumento es de origen público. Si es privado, lo define el propietario."
                        },
                        "licencias_y_permisos": {
                            "name": "Licencias y permisos",
                            "definition": "se deben pagar para acceder a un servicio regulado por el Estado. P.e., los permisos de caza, pesca, explotación de recursos, etc. En Colombia, se adicionan los de publicidad y los de funcionamiento. Son del orden territorial o de actividad. Las curadurías otorgan la licencia de construcción y ese valor, en parte, ingresa al presupuesto del municipio y, en otro porcentaje, va a la nación. Los de pesca y caza aportan a la sostenibilidad de la zona donde se ejercen. Para el municipio, es recomendable el uso de los permisos, pues se pueden aplicar por voluntad suya.",
                            "context": "Se aplican luego de que se han expedido las reglas de uso del suelo en una zona determinada.",
                            "requirements": "se debe contar con una zonificación clara en un instrumento de planificación para saber dónde aplicarlo, ya sea por actividad o por transformación del suelo.",
                            "which": "Con los instrumentos gestión, para generar zonas de utilidad pública que estén en las UPR, y con todos los de financiación, porque el recaudo no es suficiente, en la mayoría de los casos, para mantener las zonas sujetas a las actividades.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces. Se articula con las curadurías municipales para su ejecución."
                        },
                    }
                },
                "economicos_o_de_mercado": {
                    "instruments": {
                        "cuotas": {
                            "name": "Cuotas",
                            "definition": "sistemas de permisos transables que establecen cantidades máximas o mínimas de emisiones a los usuarios por un periodo determinado, p. e., las cuotas de pesca.",
                            "context": "En el caso de que un recurso natural (especie) se vea afectado por un uso excesivo o sea necesario limitar las emisiones de contaminación.",
                            "requirements": "se requieren estudios para establecer las cuotas (especies y volúmenes susceptibles de ser aprovechados) y la temporalidad de aplicación del instrumento.",
                            "which": "Con otros instrumentos de educación.",
                            "institutions": "el municipio, en articulación con las instituciones que reglamenten la cuota. Por ejemplo, en caso de pesca, es la Autoridad Nacional De Acuicultura y Pesca, junto con Ministerio de Ambiente."
                        },
                        "compensaciones_ambiental_o_patrimonial": {
                            "name": "Compensaciones ambientales",
                            "definition": "compensación por los impactos ambientales de actividades que involucran el cambio de uso del suelo, uso directo de agua o desarrollo de un proyecto o actividad. Por ejemplo, sustracciones de reservas forestales [9].",
                            "context": "En el marco de la ejecución de cualquier proyecto objeto de licenciamiento ambiental, el solicitante debe proponer programas y proyectos orientados a la prevención, mitigación, corrección y compensación de los impactos generados por la ejecución del proyecto en los componentes bióticos (fauna, flora, cobertura vegetal y contexto paisajístico). También en el caso de aprovechamiento único del recurso forestal por cambio de uso del suelo y sustracciones de reservas forestales [10].",
                            "requirements": "cumplimiento de la normatividad asociada al licenciamiento ambiental y seguir los lineamientos del manual de compensaciones del componente biótico del ministerio de ambiente [10].",
                            "which": "Se combina con instrumentos de ordenamiento del territorio o instrumentos de ordenación ambiental del territorio. Algunos modos de compensación que pueden aplicar con acuerdos de conservación y pagos por servicios ambientales.",
                            "institutions": "Minambiente, ANLA, Autoridades Ambientales, los grandes centros urbanos y los establecimientos públicos ambientales."
                        },
                        "subsidios": {
                            "name": "Subsidios",
                            "definition": "son una ayuda o beneficio económico de los gobiernos para estimular la demanda de un bien o atender las necesidades de la población [11].",
                            "context": "Cuando se quiere, por ejemplo, alcanzar un propósito social o productivo: desde dar acceso a servicios públicos, hasta dar educación a los niños más pobres, asegurar el acceso a salud o favorecer e impulsar ciertas actividades productivas.",
                            "requirements": "definir la población o los sectores que se desea atender o incentivar. No es necesario un instrumento de planificación previamente aprobado. El municipio debe, asimismo, contar con los recursos económicos suficientes para brindar el subsidio.",
                            "which": "Se pueden articular con los instrumentos de gestión y con los de financiación.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces, para determinar las áreas; con la Dirección o Secretaría de Ambiente, para definir metas, y con la Secretaría o Departamento de Hacienda, para cálculo de montos y reporte de valores."
                        },
                        "certificacion_de_incentivo_forestal": {
                            "name": "Certificado de Incentivo Forestal (CIF)",
                            "definition": "reconocimiento a las externalidades positivas de la reforestación de hasta el 50% de los costos de establecimiento y mantenimiento de la planeación forestal [12]. Las especies beneficiadas CIF y el valor a reconocer se establecen por medio de las resoluciones 80 y 474 de 2013 y 357 del 31 de octubre de 2019.",
                            "context": "Cuando se quieran establecer nuevas plantaciones forestales con fines comerciales.",
                            "requirements": "los predios deben estar ubicados en suelos de aptitud forestal y hay que demostrar que el área no tiene plantaciones forestales desde los últimos 5 años [12].",
                            "which": "Puede complementarse con instrumentos de financiación o formulación de proyectos.",
                            "institutions": "propietario o arrendatario del predio que se quiera reforestar o entidades municipales descentralizadas [12]."
                        },
                        "bonos_verdes": {
                            "name": "Bonos verdes",
                            "definition": "instrumento para financiar parcial o totalmente proyectos verdes nuevos o existentes. Son emitidos por entidades privadas o públicas [13]. Pueden financiar proyectos para la conservación de la biodiversidad y agricultura sostenible, entre otros de carácter ambiental.",
                            "context": "En caso de que se necesiten recursos para la financiación parcial o total de proyectos que contribuyan al medio ambiente y a la conservación de la biodiversidad.",
                            "requirements": "requiere la presentación de informes periódicos para demostrar que la inversión se usa realmente para beneficiar al medio ambiente [14].",
                            "which": "Se puede articular con instrumentos de gestión del suelo y otros financieros.",
                            "institutions": "puede ser por una entidad privada o pública que requiere financiación, en el caso público puede ser la Secretaría de Hacienda, en conjunto con la autoridad ambiental competente [15]."
                        },
                        "fondos": {
                            "name": "Fondos",
                            "definition": "facilita la concurrencia de recursos e integra a los actores relevantes para promover acciones de conservación: empresas, administración municipal, autoridad ambiental y sociedad civil, entre otros [16].",
                            "context": "Cuando hay concurrencia de múltiples esfuerzos y fuentes de recursos que se quieran canalizar a través de una figura para el desarrollo de planes, programas o proyectos de conservación de manera colectiva [17].",
                            "requirements": "suscripción de convenios de cooperación con entidades públicas, así como acuerdos de entendimiento entre los actores involucrados en la creación del fondo [18]. Creación de una persona jurídica sin ánimo de lucro.",
                            "which": "Se deben articular con la mayor cantidad posible de instrumentos tanto de gestión como de financiación y económicos.",
                            "institutions": "concurrencia de voluntades que puede ser entre entidades públicas, autoridad ambiental o de estas con el sector privado [17]."
                        },
                        "exencion_predial": {
                            "name": "Exención predial",
                            "definition": "es una deducción del impuesto predial gravado por el municipio a la propiedad inmueble por la conservación de la biodiversidad. El porcentaje deducido corresponde al que el municipio defina. Puede decretarse por un plazo máximo de 10 años.",
                            "context": "En el caso de terrenos de propiedad privada que conserven adecuadamente vegetación natural y que tengan una extensión unitaria no inferior a cinco hectáreas o terrenos que hayan formulado y estén ejecutando un plan de manejo aprobado por la autoridad ambiental o que hayan establecido un proyecto específico de conservación in situ o ex situ, por ejemplo, un jardín botánico [19].",
                            "requirements": "identificar las prioridades regionales de conservación de la biodiversidad (programas o metas de conservación municipal) y tener en cuenta los instrumentos de planificación ambiental y territorial [19].",
                            "which": "Los de financiación y económicos, en especial los de formulación de proyectos.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda, o quien haga sus veces, para determinar zonas y con la Secretaría o Departamento de Hacienda para su cobro y aplicación. Concejo municipal para la aprobación."
                        },
                        "transferencias_de_derechos_de_construccion": {
                            "name": "Transferencias de derechos de construcción y desarrollo",
                            "definition": "es un mecanismo consignado en la Ley 388/1997 (Art. 38) y en el Decreto 1337/ 2002 para la aplicación de compensaciones en tratamientos de conservación ambiental mediante la transferencia de derechos de construcción y desarrollo.",
                            "context": "Los municipios y las autoridades ambientales pueden adquirir terrenos clasificados por su normativo ambiental como de conservación o protección ambiental [20].",
                            "requirements": "requiere que el municipio haya “definido la transferencia de derechos de construcción y desarrollo como mecanismo para el pago de la compensación por el tratamiento de conservación, en los términos que establecen los artículos 6°, 7°, 8°, 9° y 10 del Decreto 151 de 1998” [20].",
                            "which": "Pueden aplicarse con otros instrumentos económicos, de preferencia voluntarios.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces. Se debe articular con la Secretaría o Departamento de Hacienda para determinar valor del m2, así como el responsable de administrar esa transferencia."
                        },
                        "compensaciones_de_cargas_estimulos_y_beneficios": {
                            "name": "Compensaciones de conservación histórica, arquitectónica o ambiental",
                            "definition": "instrumento de gestión urbana, regulado por la Ley 388/1997 (Art. 48 y 49). Permite compensar a los dueños de terrenos o inmuebles que han sido definidos por el POT, o los instrumentos que los desarrollan, como de conservación histórica, arquitectónica o ambiental.",
                            "context": "En aquellos casos en los que la conveniencia pública declare determinados inmuebles como de conservación histórica, arquitectónica o ambiental, en el POT (Ley 388/1997).",
                            "requirements": "constituir fondos como mecanismo para asegurar el reparto equitativo de las cargas y beneficios generados y garantizar el pago de compensaciones (Ley 388/1997).",
                            "which": "Se pueden combinar con encargos fiduciarios, transferencia de derechos de construcción y desarrollo.",
                            "institutions": "administraciones municipales."
                        },
                    }
                },
                "educacion_y_formacion": {
                    "instruments": {
                        "certificaciones_y_sellos": {
                            "name": "Certificaciones y sellos",
                            "definition": "buscan generar cambios en la toma de decisiones por parte de los consumidores al momento de la adquisición de bienes o servicios. Se clasifican como instrumentos de educación y formación porque, generalmente, van acompañados de campañas o procesos de sensibilización que llevan información a los consumidores acerca de las características del producto o servicio en términos del uso eficiente y sostenible de los recursos naturales o su impacto ambiental positivo para su provisión.",
                            "context": "Cuando se tiene una especialidad como el caso de agricultura, ganadería o turismo.",
                            "requirements": "establecer productos, zonas, procedimiento y estrategia para asegurar la venta o comercialización de un producto que respalda la sostenibilidad.",
                            "which": "Con cualquiera de los otros instrumentos, en especial los de orden voluntario o que garanticen recursos adicionales al inicio del proceso para alcanzar el sello.",
                            "institutions": "Secretaría o Dirección de Planeación, Secretaría de Agricultura y Medio Ambiente o quien haga sus veces. Para el caso de construcción sostenible, las dependencias y autoridades ambientales. Si el sello es internacional, la entidad certificadora y el Icontec son los verificadores."
                        },
                        "negocios_verdes_y_sostenibles": {
                            "name": "Negocios verdes y sostenibles",
                            "definition": "propician la creación de una cultura alineada con los principios ambientales al contemplar actividades económicas que ofertan bienes o servicios con un impacto ambiental positivo e incorporan buenas prácticas ambientales, sociales y económicas con enfoque de ciclo de vida. De tal manera, contribuyen a la conservación del ambiente como capital natural para el desarrollo del territorio [21].",
                            "context": "Pueden usarse en cualquier municipio siempre y cuando las actividades económicas estén relacionadas con bienes y servicios sostenibles provenientes de recursos naturales, eco-productos industriales y mercado de carbono (relacionado con el cambio climático).",
                            "requirements": "cumplir con los criterios establecidos por el Minambiente para ser un negocio verde y sostenible [21].",
                            "which": "En especial con los económicos y de financiación (por ejemplo, PSA), que garanticen recursos adicionales para la sostenibilidad del negocio.",
                            "institutions": "autoridades ambientales y administraciones municipales, en coordinación con la autoridad ambiental y productores."
                        },
                    }
                },
                "voluntarios": {
                    "instruments": {
                        "redd": {
                            "name": "REDD+",
                            "definition": "mecanismo para la reducción de las emisiones derivadas de la deforestación y la degradación de los bosques. Busca la gestión de los bosques, la conservación de la biodiversidad y stocks de carbono, así como el aumento de las reservas de carbono. Incluye el fortalecimiento de capacidades locales y la generación de alternativas productivas [22] Reglamentados en Colombia por la Ley 1931/2018 y la Resolución 1447/2018.",
                            "context": "Este mecanismo se puede utilizar para realización de proyectos que busquen la conservación del bosque.",
                            "requirements": "los proyectos deben cumplir con las normas nacionales e internacionales de derechos de las comunidades, sus territorios y conservación de los recursos naturales y se deben desarrollar bajo condiciones de negociación justas [23].",
                            "which": "Con los de gestión, para aplicar medidas entre la zona de conservación y las zonas de desarrollo que recibirán los derechos; también con los de comando y control, ya que varios impuestos o tarifas pueden complementar la acción.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces. Secretaría o Departamento de Hacienda."
                        },
                        "pago_por_servicios_ambientales_psa": {
                            "name": "Pago por Servicios Ambientales (PSA)",
                            "definition": "se definen como el reconocimiento monetario o en especie por la conservación de un bien o servicio que presta el ecosistema. Tienen fundamento normativo en la Ley 99/1993, el Conpes 3886/2017 y el Decreto 870/2017.  En el proceso para aplicar un PSA es relevante el acuerdo de dejar de transformar una zona y conservarla o restaurarla. Su aplicación estricta depende de seguir los pasos de la norma (Decreto 870/2017 y Decreto 1007/2018); de lo contrario, aunque puede aplicarse, no obtendrá́ los recursos del gobierno como apalancamiento económico. En la actualidad, son aplicados a servicios hídricos, de regulación y conservación de la biodiversidad.",
                            "context": "Cuando se identifica un conflicto en el área a conservar, ya sea por aumento de frontera agrícola, por cambio de uso del suelo o porque se desea mitigar el impacto de la deforestación y transformación del ecosistema.",
                            "requirements": "tipo de propiedad, tipo de beneficiario, contar con una de las categorías que dispone la norma y tener identificada la fuente de la que provendrán los recursos.",
                            "which": "Es recomendable que se apalanque de otros instrumentos como un negocio verde con sello o zonas con declaratoria de impuestos exentos para garantizar que las acciones desarrolladas se mantengan en el tiempo y consolidar la acción de conservación.",
                            "institutions": "Ministerio de Ambiente y Desarrollo Sostenible, en conjunto con la autoridad ambiental y el ente territorial que lo ejecute."
                        },
                        "donaciones": {
                            "name": "Donaciones",
                            "definition": "una donación para conservación puede ser monetaria o en especie, siendo la segunda una de factible aplicación a terrenos para incrementar las áreas de conservación.  Su principal característica es que no requiere un reembolso por parte del beneficiario.",
                            "context": "Cuando se conozca la zona que va a ser objeto de la donación y las acciones a realizar.",
                            "requirements": "tener claras la causa de la donación, la temporalidad y la finalidad de lo que sea captado.",
                            "which": "Se requiere apalancar con otros: económicos, de gestión y financiación, por cuanto el recaudo tiende a ser poco.",
                            "institutions": "Secretaría o Departamento de Hacienda, en conjunto con la institución o dependencia que implementará los recursos, la autoridad ambiental o quien haga sus veces."
                        },
                        "compromisos_privados": {
                            "name": "Compromisos privados",
                            "definition": "se derivan de los instrumentos de educación y formación en tanto surgen, por lo general, de procesos de responsabilidad social empresarial a través de reconocimientos por acciones positivas hacia el medio ambiente. Los entes privados acuerdan unas reglas de juego que involucran la compensación con el fin de persuadir el comportamiento de los agentes (GEF, PNUD, 2014) [21]. Los acuerdos negociados tienen al menos un actor privado que compensa al actor público. Si es un programa voluntario, se aplican a las empresas como un esquema reputacional o de buen nombre. También están los acuerdos unilaterales que se dan entre gremios para reconocer a una empresa y, finalmente, los de responsabilidad social empresarial (GEF, PNUD, 2014) [21].",
                            "context": "Al darse entre privados, no tienen condicionalidad, se pueden aplicar en cualquier momento.",
                            "requirements": "contar con dos instituciones, personas o acciones entre los privados, una acción en común y un objetivo del compromiso.",
                            "which": "Con todos los económicos; con aquellos de gestión que permitan asegurar la zona y los de financiación como formulación de proyectos, cuando no se tienen recursos propios.",
                            "institutions": "Secretaría o Dirección de Planeación, de Ambiente o quien haga sus veces. Para el caso de construcción sostenible, las dependencias y autoridades ambientales. Si el sello es internacional, verifican la entidad certificadora y el Icontec."
                        }
                    }
                },
                
            }
        },
        "financiacion": {
            "types": {
                "formulacion_de_proyectos": {
                    "instruments": {
                        "formulacion_de_proyectos": {
                            "name": "Formulación de proyectos",
                            "definition": "mecanismo de apalancamiento financiero. Es una fuente primaria de recursos monetarios. Según el tipo de formulación, permite obtener recursos de fuentes públicas o privadas locales, regionales, nacionales o internacionales. Las hay en la metodología marco lógico, muy utilizadas a nivel de instituciones y convocatorias internacionales; las notas concepto, que manejan instituciones multilaterales, y los esquemas en Metodología General Ajustada (MGA) para aplicar a recursos de regalías, entre otras.",
                            "context": "Cuando se ha identificado una fuente de recursos.",
                            "requirements": "es necesario un formulador que, por lo general, es una entidad externa. El tipo de formulación dependerá del oferente de los recursos, quien dispone los requisitos y mecanismos. Debe indicarse el tipo de fondo al que se presenta: regional, municipal o de ciencia y tecnología. Es importante demostrar en la factibilidad, prefactibilidad o sostenibilidad del proyecto mayores beneficios que costos de implementación.",
                            "which": "Con todos los económicos y de gestión.",
                            "institutions": "la institución que solicitará los recursos, con aprobación de la dirección de planeación y la carta de presentación del alcalde."
                        }
                    }
                },
                "desarrollo_territorial": {
                    "instruments": {
                        "reajuste_de_tierras_y_cooperacion_entre_participes": {
                            "name": "Reajuste de tierras y cooperación entre partícipes",
                            "definition": "es un mecanismo, articulado dentro del plan parcial que posibilita la actuación urbanística (Ley 388/1997, Cap. V, Art. 44) y está concebido para reconfiguraciones prediales que permitan la actuación, ajustando las cargas y siempre validado por al menos el 51% de propietarios e identificando cómo será la restitución de aprovechamientos.  Siempre que el desarrollo de la UAU requiera una nueva definición predial para una mejor configuración del globo de terreno que la conforma o para garantizar una justa distribución de las cargas y los beneficios, la ejecución de la UAU se realizará mediante el mecanismo de reajuste de tierras. (Art. 45 y 46). Es el instrumento que articula la gestión territorial y el financiamiento.",
                            "context": "Por disposición del POT.",
                            "requirements": "los que determina la Ley 388 de 1997 (Art. 44) y los porcentajes identificados. El mecanismo de actuación estará ajustado a la sumatoria de las partes (Art. 47).",
                            "which": "Con otros que provean recursos para la conservación con zonas desarrollo cercanas como los derechos de preferencia. Si no es necesaria una reconfiguración predial, se hace por cooperación entre partícipes, en la que todos tienen una distribución equilibrada de cargas y beneficios según sus participaciones.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces. Se articulan con los desarrolladores de construcción para determinar zonas, tiempos y beneficios que los financiarán."
                        }
                    }
                },
                "creditos_blandos": {
                    "instruments": {
                        "creditos_blandos": {
                            "name": "Créditos blandos",
                            "definition": "es un mecanismo mediante el cual un acreedor presta dinero a tasas de interés más bajas o favorables para el deudor. En ese caso, por lo general, el gobierno asume el pago de una parte de la tasa de interés, con el fin de alcanzar metas nacionales en temas como reforestación o protección ambiental, por ejemplo.",
                            "context": "Cuando se tienen claros la zona y los sectores económicos; en general, para evidenciar cómo potenciar su financiación.",
                            "requirements": "los que cada programa solicita, ya sean del Ministerio de Agricultura o del gobierno en general.",
                            "which": "Debe ir muy apalancado de mecanismos de mercado o voluntarios para garantizar el pago; de lo contrario, lo obtenido se revierte.",
                            "institutions": "Secretaría de planeación, autoridad ambiental. Entidad financiera."
                        }
                    }
                },
                "destinacion_especifica": {
                    "instruments": {
                        "plusvalia": {
                            "name": "Plusvalía",
                            "definition": "es el derecho del municipio o distrito a participar del incremento que se genera sobre el valor del suelo por decisiones administrativas y se paga solo cuando el propietario percibe el incremento: transferencia de dominio, licencia o cambio de uso (Ley 388/97 Art. 73 al 90). El municipio recibe directamente lo recaudado.",
                            "context": "1. Incorporación de suelo rural a suelo de expansión o a suburbano; 2. Cambio de uso a uno más rentable; 3. Aumento de aprovechamiento de edificabilidad: índice de construcción o de ocupación (el Art. 87 de la Ley 388/1997 determina participación en plusvalía por ejecución obra pública).",
                            "requirements": "que esté incluido en el POT cuando ocurre el cambio o venta del predio que se haya reglamentado; definir la tasa a aplicar, debe oscilar entre el 30% y 50% del mayor valor generado [2]. Tener claras las zonas y los tipos de terrenos: de desarrollo, en la medida que se consoliden, o en renovación, según el POT.",
                            "which": "Se combina con instrumentos de gestión como los planes parciales, las UPR.",
                            "institutions": "Secretaría o Dirección de Planeación, en conjunto con la de Vivienda o quien haga sus veces."
                        },
                    }
                },
                "inversion_forzosa": {
                    "instruments": {
                        "inversion_forzosa": {
                            "name": "Inversión forzosa no menor del 1%",
                            "definition": "los proyectos que tomen agua directamente de fuentes naturales deben destinar no menos del 1% del valor total del costo total del proyecto en actividades para la preservación y recuperación del recurso hídrico (Decreto 2099/2016). Las actividades para destinar los recursos pueden están descritas en los planes de ordenación y manejo de las cuencas (POMCA) o, en caso de que no existan, los recursos se pueden destinar a acciones asociadas a la protección, conservación, preservación, recuperación y vigilancia del recurso hídrico (Decreto 2099/2016).",
                            "context": "El instrumento se hace efectivo cuando el agua sea tomada directamente de una fuente superficial o subterránea, el proyecto requiere licencia ambiental e involucre el uso de agua en cualquiera de las etapas de su ejecución. Asimismo, los recursos deben ser destinados en la subzona o zona hidrografía dentro de la que se desarrolla el proyecto.",
                            "requirements": "la inversión se define desde el trámite de la licencia ambiental del proyecto, por tanto, se debe presentar el estudio de impacto ambiental (EIA), la propuesta de inversión y la delimitación del área de la inversión.",
                            "which": "Puede combinarse con otros instrumentos económicos y se debe reforzar con los de financiación, por ejemplo, formulación de proyectos.",
                            "institutions": "ANLA y Ministerio de Ambiente y Desarrollo Sostenible."
                        },
                    }
                },
                "encargos_fiduciarios": {
                    "instruments": {
                        "encargos_fiduciarios": {
                            "name": "Encargos fiduciarios",
                            "definition": "es un instrumento ágil y flexible mediante el cual se pueden realizar innumerables finalidades. Tradicionalmente se ha sostenido que “es un traje hecho a la medida”. Consiste en un acto administrativo en el cual una persona (fideicomitente) entrega a una sociedad fiduciaria uno o más bienes determinados (puede transferir o no la propiedad), con el propósito de que cumpla con ellos una finalidad específica, bien sea en beneficio del fideicomitente o de un tercero. En Colombia, las sociedades fiduciarias son las entidades autorizadas por la Superintendencia Financiera para desarrollar negocios fiduciarios de carácter comercial.",
                            "context": "Al tener la ventaja de poder organizar un manejo separado de subcuentas, según la destinación específica, el municipio puede entregar recursos en administración para fines de un proyecto y garantizar su buen manejo (ejemplo, recursos estatales para compra de predios mantenimiento de las vías, pago de licencias ambientales). Además, otras entidades del Estado pueden aportar recursos a un proyecto subregional o regional.",
                            "requirements": "debe existir un contrato de encargo entre el municipio y la fiduciaria que contemple la finalidad, las instrucciones manejo de los recursos y las metas a alcanzar.",
                            "which": "Se puede combinar con instrumentos de gestión del suelo y se debe reforzar con los de financiación, por ejemplo, formulación de proyectos.",
                            "institutions": "Sociedades Fiduciarias, Secretaría de Hacienda, Secretaría o Dirección de Planeación."
                        }
                    }
                },
            }
        }
    }
}

$(window).on('load', function () {
    hideContents()
    hideText();
});

$(document).ready(function () {
    know_resolution();
    indicatorState(0, 0);

    let rutaImgHome = 'assets/img/images/';

    $('#groups').load(jsonSVG.groups)
    $('.outer-loader').delay(1000).fadeOut('slow');
 
    $('#plustipbox1').click(function(){
        $('.tipbox1').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img1.png');
    });
    $('#plustipbox2').click(function(){
        $('.tipbox2').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img2.png');
    });
    $('#plustipbox3').click(function(){
        $('.tipbox3').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img3.png');
    });
    $('#plustipbox4').click(function(){
        $('.tipbox4').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img4.png');
    });
    $('#plustipbox5').click(function(){
        $('.tipbox5').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img5.png');
    });
    $('#plustipbox6').click(function(){
        $('.tipbox6').css('opacity', 1);
        $('#rueda-home').attr('href',rutaImgHome+'img6.png');
    });

 
    $('#closetipbox1').click(function(){
        $('.tipbox1').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });
    $('#closetipbox2').click(function(){
        $('.tipbox2').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });
    $('#closetipbox3').click(function(){
        $('.tipbox3').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });
    $('#closetipbox4').click(function(){
        $('.tipbox4').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });
    $('#closetipbox5').click(function(){
        $('.tipbox5').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });
    $('#closetipbox6').click(function(){
        $('.tipbox6').css('opacity', 0);
        $('#rueda-home').attr('href',rutaImgHome+'img0.png');
    });

    // EasyZoom para zoom de imagen en modal https://i-like-robots.github.io/EasyZoom/
    $('.easyzoom').easyZoom({
        preventClicks: false
    });
    
    $('.easyzoom').hover(function(){
        let routeimg = $('#img-rueda-modal').attr('src');
        $('.easyzoom-flyout img').attr('src', routeimg);
    })

    let angle = 0;
    $('.easyzoom').click(function(){
        angle += 15;
        $('.easyzoom-flyout img').css('transform', 'rotate('+angle+'deg)')
    })
});

function know_resolution () {
    let widthScreen = screen.width;

    if (widthScreen <= 1280) {
        $('#thirdLvl > div:nth-child(1) div ').removeClass('px-5');
    }
}

function loadSVG(id, svg) {
    $(id).load(svg)
}

function showType(svg) {
    checker(1);
    hideContents(1);
    loadSVG("#types", jsonSVG[svg])
    setTimeout(
        function () {
            showContents(2);
        }, 300);
}

function showTypeInstrument(svg, inv, ges) {
    checker(2);
    hideContents(2);
    loadSVG("#typeInstrument", jsonSVG[svg])
    setTimeout(
        function () {
            showContents(3);
            indicatorState(inv, ges);
        }, 300);
}

function showInstrument(group, type, instrument) {
    let name = obj["groups"][group]["types"][type]["instruments"][instrument]["name"];
    let definition = obj["groups"][group]["types"][type]["instruments"][instrument]["definition"];
    let requirements = obj["groups"][group]["types"][type]["instruments"][instrument]["requirements"];
    let context = obj["groups"][group]["types"][type]["instruments"][instrument]["context"];
    let which = obj["groups"][group]["types"][type]["instruments"][instrument]["which"];
    let institutions = obj["groups"][group]["types"][type]["instruments"][instrument]["institutions"];
    toogleTexts(name, definition, requirements, context, which, institutions);
    //changeImage(nameImg);
    hideText();
    setTimeout(
        function () {
            animationsControl();
        }, 100);
    fillInstrument();
    checker(3);
    $('#' + instrument).addClass('active');
}

function returnToGroups() {
    unchecker(1);
    hideText();
    indicatorState(0,0);
    fillInstrument()
    hideContents();
    setTimeout(
        function () {
            showContents(1);
        }, 300);
}

function returnToTypesInstrument() {
    unchecker(2);
    hideText();
    indicatorState(0,0);
    fillInstrument()
    hideContents(3);
    setTimeout(
        function () {
            showContents(2);
        }, 300);
}

function showContents(opt) {
    switch (opt) {
        case 1:
           
            $('#firstLvl svg').removeClass('animate__zoomOut').hide();
            $('#firstLvl div').show();
            setTimeout(
                function () {
                    $('#firstLvl svg').addClass('animate__zoomIn').show();
                }, 300);
            break;

        case 2:
           
            $('#secondLvl svg').removeClass('animate__zoomOut').hide();
            $('#secondLvl div').show();
            setTimeout(
                function () {
                    $('#secondLvl svg').addClass('animate__zoomIn').show();
                }, 300);
            break;

        case 3:
            $('#thirdLvl svg').removeClass('animate__zoomOut').hide();
            $('#thirdLvl').addClass('contents');
            $('#thirdLvl div').show();
            setTimeout(
                function () {
                    $('#thirdLvl svg').addClass('animate__zoomIn').show();
                }, 300);
            break;

        default:
            break;
    }
}

function hideContents(opt) {
    switch (opt) {
        case 1:
  
            $('#firstLvl svg').removeClass('animate__zoomIn');
            $('#firstLvl svg').addClass('animate__zoomOut');
            setTimeout(
                function () {
                    $('#firstLvl div').hide();
                }, 400);
            break;

        case 2:

            $('#secondLvl svg').removeClass('animate__zoomIn');
            $('#secondLvl svg').addClass('animate__zoomOut');
            setTimeout(
                function () {
                    $('#secondLvl div').hide();
                }, 400);
            break;

        case 3:
            $('#thirdLvl svg').removeClass('animate__zoomIn');
            $('#thirdLvl svg').addClass('animate__zoomOut');
            setTimeout(
                function () {
                    $('#thirdLvl div').hide();
                    $('#thirdLvl').removeClass('contents');
                }, 400);
            break;

        default:
            $('#secondLvl div').hide();
            $('#thirdLvl div').hide();
            $('#thirdLvl').removeClass('contents');
            break;
    }
}

function checker(opt) {
    switch (opt) {
        case 1:
            $('#grupo').prop('checked', true);
            break;
        case 2:
            $('#grupo, #tipo').prop('checked', true);
            break;
        case 3:
            $('#instrumento, #requerimiento, #cuando, #combinar').prop('checked', true);
            break;
        default:
            break;
    }
}

function unchecker(opt) {
    switch (opt) {
        case 1:
            $('#grupo, #tipo, #instrumento, #requerimiento, #cuando, #combinar').prop('checked', false);
            break;
        case 2:
            $('#tipo, #instrumento, #requerimiento, #cuando, #combinar').prop('checked', false);
            break;
        case 3:
            $('#instrumento, #requerimiento, #cuando, #combinar').prop('checked', false);
            break;
        default:
            break;
    }
}

function fillInstrument() {
    $('.hoverable').each(function () {
        $(this).removeClass('active');
    });
}

function animationsControl() {
    $('#text1, #text5').addClass('animate__fadeInDown').show();
    $('#text2, #text3, #text4').addClass('animate__flipInX').show();
}

function hideText() {
    $('#text1, #text5').removeClass('animate__fadeInDown').hide();
    $('#text2, #text3, #text4').removeClass('animate__flipInX').hide();
}

function toogleTexts(name, definition, requirements, context, which, institutions) {
    $('#instrument').html(name);
    $('#definition').html(definition);
    $('#requirements').html(requirements);
    $('#context').html(context);
    $('#which').html(which);
    $('#institutions').html(institutions);
}

function indicatorState(inv, ges) {
    if( inv == 0) {
        $('.indicator span').each(function(){
            $(this).removeClass('selected');
        });
    } else {
        $('.colors_inv .indicator span:nth-child('+inv+')').addClass('selected');
    }

    if( ges == 0) {
        $('.indicator span').each(function(){
            $(this).removeClass('selected');
        });
    } else {
        $('.colors_ges .indicator span:nth-child('+ges+')').addClass('selected');
    }

   
}

function checkNavigation(){
    unchecker(3);
    fillInstrument();
    hideText();
}

function changeImage(nameImg) {
    let route = "assets/img/rueda_sectores/"+nameImg+".png";
    $('#a-rueda-modal').attr('href', route);
    $('#img-rueda-modal').attr('src', route);
}