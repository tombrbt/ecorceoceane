UPDATE ps_configuration t SET t.value = 1 WHERE t.name = "EGGATEWAY_MEDIATOR_ENABLED";
UPDATE ps_configuration t SET t.value = 'OW9XYTVNM01oOXpOaUdITU9zOTJYQUg0VExZYTpPd04xS3M4UVRrUWlrZHpIdE9fT1E3VjdvckFh' WHERE t.name = "EGGATEWAY_MEDIATOR_AUTH_TOKEN";
UPDATE ps_configuration t SET t.value = 'https://pprod-gateway1-apim.back.defense.gouv.fr:8244/mediateur_habillement/api/v1/clients/' WHERE t.name = "EGGATEWAY_MEDIATOR_CUSTOMER_ENDPOINT_URL";
UPDATE ps_configuration t SET t.value = 'https://pprod-gateway1-apim.back.defense.gouv.fr:8244/mediateur_habillement/api/v1/commandes' WHERE t.name = "EGGATEWAY_MEDIATOR_ORDER_ENDPOINT_URL";
UPDATE ps_configuration t SET t.value = 'https://pprod-gateway1-apim.back.defense.gouv.fr:8244/token' WHERE t.name = "EGGATEWAY_MEDIATOR_AUTH_ENDPOINT_URL";
UPDATE ps_configuration t SET t.value = 'grant_type=password&username=mediateur_habillement&password=M3d1at3uR_Hab1ll3m3nt' WHERE t.name = "EGGATEWAY_MEDIATOR_AUTH_EXTRA_PARAM";


UPDATE ps_configuration t SET t.value = 'http://www.pprod-acheron.dirisi.defense.gouv.fr/partenaire14/' WHERE t.name = "EGGATEWAY_ACHERON_BASE_URL";
UPDATE ps_configuration t SET t.value = 'c47uP_SVvFo_ZXCgW_EYtT5' WHERE t.name = "EGGATEWAY_ACHERON_API_PASSWORD";
UPDATE ps_configuration t SET t.value = 1 WHERE t.name = "EGGATEWAY_ACHERON_ENABLED";
UPDATE ps_configuration t SET t.value = 'partenaire14' WHERE t.name = "EGGATEWAY_ACHERON_API_USERNAME";
UPDATE ps_configuration t SET t.value = '/var/www/html/dpc/exchanges' WHERE t.name = "EGGATEWAY_ACHERON_LOCAL_EXCHANGE_DIR";


UPDATE ps_configuration t SET t.value = 'http://pprod-mindefconnect-auth.defense.gouv.fr/auth/realms/heliss_ng' WHERE t.name = "DPCMINDEFCONNECT_URL";
UPDATE ps_configuration t SET t.value = 'f97b3df5-6a03-4e04-9d80-798a7904517c' WHERE t.name = "DPCMINDEFCONNECT_RIA_TOKEN";
UPDATE ps_configuration t SET t.value = 'dpc' WHERE t.name = "DPCMINDEFCONNECT_RIA_ID";


UPDATE `ps_shop_url` SET `domain` = 'pprod-portail-dpc.cnmosis.dirisi.defense.gouv.fr', `domain_ssl` = 'pprod-portail-dpc.cnmosis.dirisi.defense.gouv.fr';